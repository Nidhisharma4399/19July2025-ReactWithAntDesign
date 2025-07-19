import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default function Nopage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>No Page</h1>
      <Link to="/">
        <Button type="primary">Go to Home Page</Button>
      </Link>
    </div>
  );
}
