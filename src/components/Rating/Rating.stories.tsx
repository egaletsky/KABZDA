import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating, RatingPropsType} from './Rating';


export default {
    title: 'Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args:RatingPropsType) => <Rating {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    stars: 3,
};