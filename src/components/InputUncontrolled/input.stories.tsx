import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UncontrolledInput} from './UncontrolledInput';



export default {
    title: 'input uncontrolled',
    //component: ,
} as ComponentMeta<typeof UncontrolledInput>;


const Template: ComponentStory<typeof UncontrolledInput> = () => <UncontrolledInput  />;

export const Primary = Template.bind({});

Primary.args = {



};