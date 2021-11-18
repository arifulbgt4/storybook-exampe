import React from 'react';
import { Avatar, List } from 'antd';
import 'antd/lib/avatar/style/css';
import 'antd/lib/list/style/css';

const SearchList = (props) => {
  const { data } = props;
  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(d) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={d?.logo} />}
            title={d.name}
            description={d?.domain}
          />
        </List.Item>
      )}
    />
  );
};

export default SearchList;
