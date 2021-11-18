import React, { useState } from 'react';
import { Form, Button, Avatar, List } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/lib/form/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/avatar/style/css';
import 'antd/lib/list/style/css';
import axios from 'axios';

import InputField from '../InputField/InputField';
import SearchList from '../SearchList/SearchList';
import styles from './style.module.css';

const CreateForm = () => {
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  const fetchCompanies = async (name) => {
    try {
      return await axios.get(
        `https://autocomplete.clearbit.com/v1/companies/suggest?query=:${name}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async (ev) => {
    try {
      const { data } = await fetchCompanies(ev.target.value);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlur = () => setData([]);

  return (
    <div className={styles.formWrapper}>
      <h2>Add a new company</h2>
      <Form
        form={form}
        name='horizontal_login'
        layout='inline'
        onFinish={onFinish}
      >
        <Form.Item name='company' className={styles.inputField}>
          <InputField
            prefix={SearchOutlined}
            placeholder='Name, website or representative email'
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item className={styles.formButtonWrapper} shouldUpdate>
          {() => (
            <Button
              className={styles.formButton}
              type='primary'
              htmlType='submit'
            >
              Create Company
            </Button>
          )}
        </Form.Item>
      </Form>

      {data?.length > 0 && <SearchList data={data} />}
    </div>
  );
};

export default CreateForm;
