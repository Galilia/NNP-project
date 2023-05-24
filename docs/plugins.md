## Plugins

Here's a list of plugins used in the project, along with their descriptions and groupings based on their usage:

**Storybook:**
- `@storybook/addon-actions`: Allows adding interactivity and actions to Storybook stories.
- `@storybook/addon-essentials`: Provides essential addons for Storybook, including controls, backgrounds, and viewport.
- `@storybook/addon-interactions`: Enables interaction testing within Storybook.
- `@storybook/addon-links`: Allows linking between stories in Storybook.
- `@storybook/builder-webpack5`: Builder for bundling Storybook with webpack 5.
- `@storybook/manager-webpack5`: Manager for running Storybook with webpack 5.
- `@storybook/react`: Integration of React components with Storybook.
- `@storybook/testing-library`: Enhances Storybook with testing utilities from Testing Library.

**Babel:**
- `@babel/core`: Core Babel compiler.
- `@babel/plugin-transform-runtime`: Transforms code to use the Babel runtime instead of duplicating it.
- `@babel/plugin-transform-typescript`: Transforms TypeScript syntax to JavaScript.
- `@babel/preset-env`: Configures Babel to use the latest JavaScript features based on the target environment.
- `@babel/preset-react`: Configures Babel for transforming JSX syntax.
- `@babel/preset-typescript`: Configures Babel for transforming TypeScript syntax.
- `babel-plugin-react-anonymous-display-name`: Babel plugin that fixes displaying, in react devtools, components wrapped by React.memo and forwardRef as Anonymous.

***Self-made plugin:***
- `babelRemovePropsPlugin`: It's a plugin that removes specified JSX elements from your code during production build. Transforming modern JavaScript (ES6 and later) 
into an older version of JavaScript (like ES5) that is more widely supported across all browsers.


**Webpack:**
- `@pmmmwh/react-refresh-webpack-plugin`: Enables fast refresh for React components during development.
- `@svgr/webpack`: Webpack loader for transforming SVG files into React components.
- `copy-webpack-plugin`: Copies files and directories during webpack build.
- `css-loader`: Resolves CSS imports and handles CSS modules.
- `file-loader`: Resolves file imports and emits files to the output directory.
- `fork-ts-checker-webpack-plugin`: Runs TypeScript type checking in a separate process.
- `html-webpack-plugin`: Generates HTML files to serve webpack bundles.
- `mini-css-extract-plugin`: Extracts CSS into separate files during the webpack build.
- `sass-loader`: Loads and compiles Sass/SCSS files.
- `style-loader`: Injects CSS into the DOM during development.
- `ts-loader`: Loads TypeScript files and compiles them using the TypeScript compiler.
- `webpack`: Bundler for JavaScript and assets.
- `webpack-bundle-analyzer`: Analyzes the size of webpack bundles.
- `webpack-cli`: Command-line interface for webpack.
- `webpack-dev-server`: Development server for webpack.

**Linting and Code Formatting:**
- `eslint`: JavaScript and TypeScript linter.
- `eslint-config-airbnb`: Airbnb's ESLint configuration.
- `eslint-config-prettier`: Disables ESLint rules that conflict with Prettier.
- `eslint-plugin-galilia-plugin`: Custom ESLint plugin for specific project needs.
- `eslint-plugin-i18next`: ESLint plugin for i18next internationalization library.
- `eslint-plugin-import`: ESLint plugin for linting import statements.
- `eslint-plugin-jsx-a11y`: ESLint plugin for accessibility rules in JSX.
- `eslint-plugin-prettier`: ESLint plugin to run Prettier as an ESLint rule.
- `eslint-plugin-react`: ESLint plugin for React-specific linting rules.
- `eslint-plugin-react-hooks`: ESLint plugin for enforcing React Hooks rules.
- `eslint-plugin-unused-imports`: ESLint plugin to detect and remove unused imports.
- `prettier`: Opinionated code formatter.
- `stylelint`: CSS linter.
- `stylelint-config-standard-scss`: SCSS-specific configuration for stylelint.

**Testing:**
- `cypress`: End-to-end testing framework for web applications.
- `jest`: JavaScript testing framework.
- `jest-html-reporters`: Jest reporters for generating HTML test reports.
- `loki`: Visual regression testing tool.
- `reg-cli`: CLI for visual regression testing with Loki.
- `react-virtuoso`: Virtualized list component for efficient rendering of large lists.
- `@testing-library/dom`: DOM testing utilities for Testing Library.
- `@testing-library/jest-dom`: Custom jest matchers for Testing Library.
- `@testing-library/react`: React testing utilities for Testing Library.
- `@testing-library/user-event`: Simulates user events for Testing Library.

**UI Component Libraries:**
- `@headlessui/react`: Collection of fully accessible, headless UI components for React.
- `react-virtuoso`: Virtualized list component for efficient rendering of large lists.
