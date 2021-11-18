import React from 'react';
import CreateCompany from './CreateCompany';

export default {
  title: 'UI/Company',
  component: CreateCompany,
};

const CreateCompanyStory = ({ ...args }) => <CreateCompany {...args} />;

export const Basic = CreateCompanyStory.bind();

Basic.args = {};
