import React from 'react';
import { Layout as AntLayout, Col, Menu, Row } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer } = AntLayout;

export default function Layout() {
  return (
    <AntLayout>
      <Header style={{ background: 'cornflowerblue', width:'100%'}}>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key="home">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="blogs">
            <Link to="/blogs">Blogs</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ textAlign: 'center' , minHeight:'450px'}}>
        <Row>
          <Col span={8} className="n_tbdr" style={{ background: 'pink', minHeight:'450px',fontSize: '24px'}}>
            <br/>
            Aside
          </Col>
          <Col span={16} className="n_tbdr" style={{ textAlign: 'center', fontSize: '24px' }}>
            <br />
            <Outlet />
          </Col>
        </Row>
      </Content>

      <Footer style={{ background: 'cornflowerblue', color: '#fff', textAlign: 'center' }}>
        Footer
      </Footer>
    </AntLayout>
  );
}
