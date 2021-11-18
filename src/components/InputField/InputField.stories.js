import React from 'react';
import InputField from './InputField';
import { SearchOutlined } from '@ant-design/icons';

export default {
  title: 'UI/Input',
  component: InputField,
  args: {
    placeholder: 'Name, website or representative email',
    prefix: SearchOutlined,
  },
  argTypes: {
    placeholder: { control: { type: 'text' } },
  },
};

const InputFieldStory = ({ ...args }) => <InputField {...args} />;

export const Basic = InputFieldStory.bind();

Basic.args = {
  placeholder: 'Name, website or representative email',
  prefix: SearchOutlined,
};
