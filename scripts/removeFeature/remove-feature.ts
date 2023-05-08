import { Project, SyntaxKind } from 'ts-morph';

import {
    isToggleComponent,
    replaceComponent,
} from './removeToggleComponent/removeToggleComponent';
import {
    isToggleFunction,
    replaceToggleFunction,
} from './removeToggleFunction/removeToggleFunction';

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

const files = project.getSourceFiles();

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunction(node, removedFeatureName, featureState);
        }

        if (
            node.isKind(SyntaxKind.JsxSelfClosingElement) &&
            isToggleComponent(node)
        ) {
            replaceComponent(node, removedFeatureName, featureState);
        }
    });
});

project.save();
