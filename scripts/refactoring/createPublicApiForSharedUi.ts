/* TS Morph
This library wraps the TypeScript compiler API to setup, navigation, and manipulation of the TypeScript AST.
command to run/debug -  ts-node .\scripts\updateImports.ts
---Script adds 'index.ts' and import/export inside it to all shared/ui/components files in shared directory---
*/

import path from 'path';

import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const sharedUiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(sharedUiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();

function isAbsolute(value: string) {
    const layers = [
        'app',
        'shared',
        'entities',
        'features',
        'widgets',
        'pages',
    ];

    return layers.some((layer) => value.startsWith(layer));
}

componentsDirs?.forEach((directory) => {
    const folderName = directory.getPath();
    const indexFilePath = `${folderName}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);
    const moduleNamePath = directory.getBaseName();

    if (!indexFile) {
        const sourceCode = `export { ${moduleNamePath} } from './${moduleNamePath}';\n`;
        const file = directory.createSourceFile(indexFilePath, sourceCode, {
            overwrite: true,
        });

        file.save();
    }
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration, index) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split('/');
        const isSharedLayer = segments?.[0] === 'shared';
        const isUiSlice = segments?.[1] === 'ui';

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
