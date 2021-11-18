import React from 'react';
import { Input } from 'antd';
import 'antd/lib/input/style/css';

const InputField = (props) => {
  const { prefix: Prefix, placeholder, onChange, ...rest } = props;
  return (
    <Input
      prefix={<Prefix />}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
};

export default InputField;
