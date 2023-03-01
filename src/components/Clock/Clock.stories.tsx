import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Clock, ClockPropsType} from './Clock';



export default {
    title: 'Clock',
    component: Clock,
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args:ClockPropsType) => <Clock {...args} />;

export const Primary = Template.bind({});

Primary.args = {};


