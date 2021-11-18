import React from 'react';
import CreateForm from './CreateForm';

export default {
  title: 'UI/CompanyForm',
  component: CreateForm,
};

const CreateFormStory = ({ ...args }) => <CreateForm {...args} />;

export const Basic = CreateFormStory.bind();

Basic.args = {};
