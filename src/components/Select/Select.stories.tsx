import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Select, SelectPropsType} from './Select'


export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: SelectPropsType) => {
    const [value, setValue] = useState('2')

    return <Select {...args} />

};

export const WithValue = Template.bind({});
export const WithoutValue = Template.bind({});

WithValue.args = {
    value: '1',
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Kiev'},
        {value: '3', title: 'Piter'},
        {value: '4', title: 'Odessa'},
    ],
    onChange: (value: any) => {
        action(value)
    }
};

WithoutValue.args = {

    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Kiev'},
        {value: '3', title: 'Piter'},

    ],
    onChange: (value: any) => {
        action(value)
    }
}