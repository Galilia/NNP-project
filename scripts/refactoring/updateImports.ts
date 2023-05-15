/* TS Morph
This library wraps the TypeScript compiler API to setup, navigation, and manipulation of the TypeScript AST.
command to run/debug -  ts-node .\scripts\updateImports.ts
---Script adds alias '@' to global imports---
*/

import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
const layerSrc = ['src/shared'];

function isAbsolute(value: string) {
    return layers.some((layer) => value.startsWith(layer));
}
function isAbsoluteSrc(value: string) {
    return layerSrc.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration, index) => {
        const value = importDeclaration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }

        if (isAbsoluteSrc(value)) {
            const segments = value.split('/');
            const newSegments = ['@', ...segments.slice(1)];
            const newValue = newSegments.join('/');
            importDeclaration.setModuleSpecifier(newValue);
        }
    });
});

project.save();
