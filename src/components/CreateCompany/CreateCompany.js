import React from 'react';
import GoogleMapReact from 'google-map-react';
import { List, Row, Col } from 'antd';
import 'antd/lib/form/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/avatar/style/css';
import 'antd/lib/list/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';

import CreateForm from '../CreateForm/CreateForm';

import styles from './style.module.css';

const CreateCompany = () => {
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
      <CreateForm />
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
        <Col lg={16} md={24} className={styles.locationContainer}>
          <Row gutter={16}>
            <Col span={12} className={styles.location}>
              <h3>Location</h3>
              <p className={styles.description}>
                165 Broadway 23rd fl, New York, NY <br />
                10006. USA
              </p>
            </Col>
            <Col span={12}>
              <h3>Timezone</h3>
              <p className={styles.description}>America/New_York</p>
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

export default CreateCompany;
