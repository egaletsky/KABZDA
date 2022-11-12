import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ControlledInput, ControlledInputType} from './ControlledInput';


export default {
    title: 'input controlled',
    //component: ,
} as ComponentMeta<typeof ControlledInput>;


const Template: ComponentStory<typeof ControlledInput> = (args: ControlledInputType) => <ControlledInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'it-incubator.by'

};