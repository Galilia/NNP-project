import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab architecto asperiores commodi consequatur dolorem facilis incidunt itaque libero mollitia optio quasi, qui repellendus tenetur voluptates. Commodi fugiat hic officiis?\n',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab architecto asperiores commodi consequatur dolorem facilis incidunt itaque libero mollitia optio quasi, qui repellendus tenetur voluptates. Commodi fugiat hic officiis?\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
