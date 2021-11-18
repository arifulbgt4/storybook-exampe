import React from 'react';
import CreateForm from './CreateForm';

export default {
  title: 'UI/CompanyForm',
  component: CreateForm,
};

const InputFieldStory = ({ ...args }) => <CreateForm {...args} />;

export const Basic = InputFieldStory.bind();

Basic.args = {};
