## Project Deployment

```
npm install - install dependencies
npm run start:dev - server start + frontend project in development mode
```

## Scripts

- `npm run start` - Run frontend project on webpack dev server
- `npm run start:dev` - Run frontend project on webpack + dev server backend
- `npm run start:dev:server` - Backend server run
- `npm run start:vite` - Running a frontend project on vite
- `npm run start:dev:vite` - Running a frontend project on vite + backend
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
- `npm run generate:slice` - Script to generate FSD slices
- `postinstall` - Command to delete the .cache folder inside the node_modules folder of the project.
- `remove-feature` - Command to remove feature flag with unused component/function declared in on or off.

## Project architecture
The project was written in accordance with the methodology FEATURE SLICED DESIGN
Link for documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

## Translation
The project uses the library i18next to work with translations. Translation files are stored in public/locales.
For comfortable work, we recommend to install a plugin for webstorm/vscode.
Documentation for i18next - [https://react.i18next.com/](https://react.i18next.com/)

## Tests

The project uses 3 types of tests:
1. Unit test on jest `npm run test:unit`
2. Tests for components with React testing library `npm run test:unit`
3. Screenshot testing with Loki `npm run test:ui`
4. e2e testing with Cypress `npm run test:e2e` ***

More about tests - [tests documentation](/docs/tests.md)

## Linting

The project uses eslint to check TypeScript code and stylelint to check styles.

Also, for strict control of the chapters of architectural principles, we use our own [eslint plugin](https://www.npmjs.com/package/eslint-plugin-galilia-plugin) which contains 3 rules:
1) path-checker - prohibits the use of absolute imports within one module
2) layer-imports - checks the correct use of layers in terms of FSD
   (e.g. widgets cannot be used in features and entities)
3) public-api-imports - allows import from other modules only from public api. Has auto fix

### Linters run

- `npm run lint:ts` -  ts file linter check
- `npm run lint:ts:fix` - ts file linter fix
- `npm run lint:scss` - scss file linter check
- `npm run lint:scss:fix` - scss file linter fix

## Storybook

The project describes story cases for each component. Requests to the server mocks with the help of an addon storybook-addon-mock.

We create story files next to the component files with the extension .stories.tsx.

- `npm run storybook` - Storybook run

Learn more about [Storybook](/docs/storybook.md)

Example:

```tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/themeConst';
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

For development, the project contains 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

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

Requests to the server sends using axios library and RTK-Query [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous reducers connection (not to pull them into a general bundle), the [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

## Working with feature-flag 

Allow feature flags only with toggleFeatures helper  an object with options is passed to it
```
{
   name: feature flag name,
   on: a function that will work after enabling the feature
   of: function that will work after the feature is turned off
}
```
To automatically remove a feature, use the remove-feature.ts script, which takes 2 arguments:
1. The name of the feature flag to be removed
2. Status (on\off)

## Entities

- Article
- Comment
- Counter
- Country
- Currency
- Notification
- Profile
- Rating
- User

## Features

- addCommentForm - Feature of adding a comment form
- articleEditForm - Feature of editing an article form
- articleRating - Feature of giving a rating to an article
- articleRecommendationsList - Feature with a list of article recommendations
- AuthByUsername - Feature for authentication by username
- avatarDropdown - Feature with a user avatar and menu
- editableProfileCard - Feature with an editable profile form
- LangSwitcher - Feature for language switching
- notificationButton - Feature with a button that opens the notification list
- profileRating - Feature of giving a rating to a profile
- ThemeSwitcher - Feature for theme switching
- UI - Feature containing functionality related to UI (scroll, etc.)

## Hooks

[Hooks](/docs/hooks.md) that were used in project.

## Plugins

[Plugins](/docs/plugins.md) that were used in project.
