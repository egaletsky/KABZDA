import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff, OnOffPropsType} from './OnOff';


export default {
    title: 'OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args:OnOffPropsType) => <OnOff {...args} />;

export const OnOfTrue = Template.bind({});
OnOfTrue.args = {
    on: true,
};


export const OnOfFalse = Template.bind({});
OnOfFalse.args = {
    on: false,
};