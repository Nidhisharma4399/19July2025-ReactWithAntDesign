import React from 'react';
import { Layout as AntLayout, Row, Col } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = AntLayout;

export default function Layout() {
  const layoutStyle = {
    background: 'cornflowerblue',
    textAlign: 'center',
    fontSize:'24px',
  };

  const asideStyle = {
    background: 'pink',
    minHeight: '435px',
    textAlign: 'center',
    fontSize:'24px'
  };


  return (
    <AntLayout style={{ textAlign: 'center', fontSize: '24px'}}>
      <Header className="n_tbdr" style={layoutStyle}>
        Header
      </Header>

      <Content className="n_tbdr">
        <Row>
          <Col span={8} style={asideStyle} className="n_tbdr" >
            Aside
          </Col>
          <Col span={16} className="n_tbdr" style={{ textAlign: 'center', fontSize: '24px'}}>
            Section
            <Outlet />
          </Col>
        </Row>
      </Content>

      <Footer className="n_tbdr" style={layoutStyle} >
        Footer
      </Footer>
    </AntLayout>
  );
}
