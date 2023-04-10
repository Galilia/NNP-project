## Project Deployment

```
npm install - install dependencies
npm run start:dev - server start + frontend project in development mode
```

## Scripts

- `npm run start` - Run frontend project on webpack dev server
- `npm run start:dev` - Run frontend project on webpack + dev server backend
- `npm run start:dev:server` - Backend server run
- `npm run build:prod` - Build in production mode
- `npm run build:dev` - Build in development mode (not minimized)
- `npm run lint:ts` -  ts file linter check
- `npm run lint:ts:fix` - ts file linter fix
- `npm run lint:scss` - scss file linter check
- `npm run lint:scss:fix` - scss file linter fix
- `npm run test:unit` - Unit test start with jest
- `npm run test:ui` - Start screenshots tests with loki
- `npm run test:ui:ok` - Approval screenshot tests with loki
- `npm run test:ui:ci` - Start screenshot tests with CI
- `npm run test:ui:report` - Generation full report about screenshot tests
- `npm run test:ui:json` - Generation json report about screenshot tests
- `npm run test:ui:html` - Generation HTML report about screenshot tests
- `npm run storybook` - Storybook run
- `npm run storybook:build` - Storybook build
- `npm run prepare` - precommit husky

## Project architecture
The project was written in accordance with the methodology FEATURE SLICED DESIGN
Link for documentation - https://feature-sliced.design/

## Translation
The project uses the library i18next to work with translations. Translation files are stored in public/locales.
For comfortable work, we recommend to install a plugin for webstorm/vscode.
Documentation for i18next - https://react.i18next.com/

## Tests

The project uses 3 types of tests:
1. Unit test on jest `npm run test:unit`
2. Tests for components with React testing library `npm run test:unit`
3. Screenshot testing with Loki `npm run test:ui`
4. e2e testing with Cypress `npm run test:e2e` ***

*** - in development

## Linting

The project uses eslint to check TypeScript code and stylelint to check styles.

Also, for strict control of the chapters of architectural principles, we use our own [eslint plugin](https://www.npmjs.com/package/eslint-plugin-galilia-plugin).

### Linters run

- `npm run lint:ts` -  ts file linter check
- `npm run lint:ts:fix` - ts file linter fix
- `npm run lint:scss` - scss file linter check
- `npm run lint:scss:fix` - scss file linter fix

## Storybook

The project describes story cases for each component. Requests to the server mocks with the help of an addon storybook-addon-mock.

We create story files next to the component files with the extension .stories.tsx.

- `npm run storybook` - Storybook run

Learn more about Storybook: https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/

Example:

```js
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

## Project configuration

For development, the project contains config:
- Webpack - ./config/build

Webpack adapted to the main features of the application.
All configuration is stored in /config

- /config/babel - babel]
- /config/build - webpack config
- /config/jest - tests config
- /config/storybook - storybook config

The scripts folder contains various scripts for refactoring / simplifying coding / generating reports, etc.

## CI pipeline and pre commit hooks

The github actions config is in /github/workflows. In CI, all types of tests are run, project and storybook assembly, linting.

In precommit hooks, we check the project with linters, config in /.husky.

## Working with data

Interaction with data is carried out with the help of the Redux toolkit. 
If possible, reusable entities should be normalized using the EntityAdapter.

Requests to the server sends using axios library.

For asynchronous reducers connection (not to pull them into a general bundle), the [DynamicModuleLoader](https://redux-dynamic-modules.js.org/#/) is used.

## Working with feature-flag *** 
*** - in development
