import { PluginItem } from '@babel/core';

/**
 * It's a plugin that removes specified JSX elements
 * from your code during transpilation process.
 * It traverses the abstract syntax tree (AST) of the code,
 * and whenever it encounters a JSX identifier (element name, like 'data-testid')
 * that matches one of the names in the props array,
 * it removes the corresponding JSX element from the AST.
 */
export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbidden = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
