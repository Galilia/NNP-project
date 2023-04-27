## Storybook
The project describes story cases for each component. Server requests are mocked using storybook-addon-mock.

A file with stories is created next to the component with the extension .stories.tsx

You can start the storybook with the command:

- `npm run storybook`
Learn more about Storybook

Example:
```tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component:Button,
    argTypes: {
    backgroundColor: { control: 'color' },
},
} as ComponentMeta<typeofButton>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
    Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
    Clear.args = {
    children: 'Text',
    theme:ButtonTheme.CLEAR,
};
```
