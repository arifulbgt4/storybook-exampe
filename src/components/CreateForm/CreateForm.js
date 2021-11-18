import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/lib/form/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import axios from 'axios';

import InputField from '../InputField/InputField';
import SearchList from '../SearchList/SearchList';
import styles from './style.module.css';

const CreateForm = () => {
  const [data, setData] = useState([]);
  const [openResult, setOpenResult] = useState(false);
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

  const handleBlur = () => setOpenResult(false);
  const handleFocus = () => setOpenResult(true);

  return (
    <div className={styles.formArea}>
      <Form
        className={styles.w100}
        form={form}
        name='horizontal_login'
        layout='inline'
        onFinish={onFinish}
      >
        <h2 className={styles.header}>Add a new company</h2>
        <Row gutter={16} className={styles.w100}>
          <Col lg={19} md={16} sm={14} xs={24}>
            <Form.Item name='company' className={styles.formItem}>
              <InputField
                prefix={SearchOutlined}
                placeholder='Name, website or representative email'
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            </Form.Item>
          </Col>
          <Col lg={5} md={8} sm={10} xs={24}>
            <Form.Item className={styles.formItem} shouldUpdate>
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
          </Col>
        </Row>
      </Form>

      {openResult && data?.length > 0 && <SearchList data={data} />}
    </div>
  );
};

export default CreateForm;
