import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Form, Button, List, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/lib/form/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/avatar/style/css';
import 'antd/lib/list/style/css';
import 'antd/lib/card/style/css';
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

  const companyData = [
    {
      title: 'Name',
      content: 'Magellan AI',
    },
    {
      title: 'Founded Year',
      content: '2016',
    },
    {
      title: 'Type',
      content: 'Private',
    },
    {
      title: 'Emplyees',
      content: '30',
    },
    {
      title: 'Estimated Annual Revenue',
      content: '$1M - $10M',
    },
  ];

  return (
    <div className={styles.formWrapper}>
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
      <List
        grid={{ gutter: 24, xs: 1, sm: 2, md: 3, lg: 5, xl: 5, xxl: 5 }}
        className={styles.infoList}
        dataSource={companyData}
        renderItem={(item) => (
          <List.Item>
            <div>
              <h3>{item.title}</h3>
              <p className={styles.description}>{item.content}</p>
            </div>
          </List.Item>
        )}
      />
      <Row gutter={60} className={styles.companyDetails}>
        <Col lg={16} md={24} style={{ paddingTop: '30px' }}>
          <Row gutter={16}>
            <Col span={12} className={styles.location}>
              <h3>Location</h3>
              <p className={styles.description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi, magni laborum
              </p>
            </Col>
            <Col span={12}>
              <h3>Timezone</h3>
              <p className={styles.description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi, magni laborum
              </p>
            </Col>

            <Col span={24} className={styles.map}>
              <GoogleMapReact
                // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                defaultCenter={{
                  lat: 59.95,
                  lng: 30.33,
                }}
                defaultZoom={11}
              />
            </Col>
          </Row>
        </Col>
        <Col lg={8} md={24} className={styles.companyContent}>
          <div>
            <h3>Description</h3>
            <p className={styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nam
              ab reprehenderit libero ipsum repudiandae quaerat debitis eos
              itaque voluptatem quis, vero nemo voluptates perspiciatis. Omnis
              ab fugiat sapiente consequatur.
            </p>
          </div>
          <div>
            <h3>Tags</h3>
            <span className={styles.description}>Marketing & Advertising</span>
          </div>
          <div>
            <h3>Industry</h3>
            <p className={styles.description}>Advertising</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CreateForm;
