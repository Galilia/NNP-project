import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isArticleEnabled
const featureState = process.argv[3]; // example off\on
//  npx ts-node .\scripts\remove-feature.ts ___FeatureFlagNameToRemove___ off/on <--- command
if (!removedFeatureName) {
    throw new Error('Specify the name of the flag feature');
}

if (!featureState) {
    throw new Error('Specify the state of the feature (on or off)');
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Feature name state should be on or off');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// TODO example for removing in one file
// project.addSourceFilesAtPaths('src/**/ArticleDetailsPage.tsx');

// const counter = toggleFeatures({
//     name: 'isCounterEnabled',
//     on: () => <CounterRedesigned />,
//     off: () => <Counter />,
// });
// toggleFeatures({
//     name: 'isCounterEnabled',
//     on: () => console.log('on'),
//     off: () => console.log('off'),
// });

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeatures = false;
    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        ) {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );

            if (!objectOptions) return;
            const offFunctionProperty = objectOptions.getProperty('off');
            const onFunctionProperty = objectOptions.getProperty('on');
            const nameFunctionProperty = objectOptions.getProperty('name');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const featureName = nameFunctionProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureName !== removedFeatureName) return;

            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '');
            }

            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '');
            }
        }
    });
});

project.save();
