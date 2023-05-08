import { Node, SyntaxKind } from 'ts-morph';

// EXAMPLE FOR FUNCTIONS:
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

const toggleFunctionName = 'toggleFeatures';

export function isToggleFunction(node: Node) {
    let isToggleFeatures = false;
    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === toggleFunctionName
        ) {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

export const replaceToggleFunction = (
    node: Node,
    removedFeatureName: string,
    featureState: string,
) => {
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
};
