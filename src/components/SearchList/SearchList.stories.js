import React from 'react';
import SearchList from './SearchList';

export default {
  title: 'UI/SearchList',
  component: SearchList,
  args: {
    data: [
      {
        name: 'Salesforce',
        domain: 'salesforce.com',
        logo: 'https://logo.clearbit.com/salesforce.com',
      },
      {
        name: 'Slack',
        domain: 'slack.com',
        logo: 'https://logo.clearbit.com/slack.com',
      },
      {
        name: 'Shopify',
        domain: 'shopify.com',
        logo: 'https://logo.clearbit.com/shopify.com',
      },
    ],
  },
};

const SearchListStory = ({ ...args }) => <SearchList {...args} />;

export const Basic = SearchListStory.bind();

Basic.args = {
  data: [
    {
      name: 'Salesforce',
      domain: 'salesforce.com',
      logo: 'https://logo.clearbit.com/salesforce.com',
    },
    {
      name: 'Slack',
      domain: 'slack.com',
      logo: 'https://logo.clearbit.com/slack.com',
    },
    {
      name: 'Shopify',
      domain: 'shopify.com',
      logo: 'https://logo.clearbit.com/shopify.com',
    },
  ],
};
