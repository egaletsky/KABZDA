import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccordionPropsType, Accordion } from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args:AccordionPropsType) => <Accordion {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    titleValue: 'MenuOne',
    collapsed: false,
    items:['qqqq','aaaa','zzzz']

};

