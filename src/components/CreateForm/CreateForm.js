import React, { useState } from 'react';
import { Form, Button, Avatar, List } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

import InputField from '../InputField/InputField';
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

      {data?.length > 0 && (
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={(d) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={d?.logo} />}
                title={<a href='https://ant.design'>{d.name}</a>}
                description={d?.domain}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default CreateForm;