import React from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link
import { Button } from 'antd';            // ✅ Import Button

export default function Nopage() {
  return (
    <>
      <div>
        <h1>No Page</h1>
      </div>
      <Link to="/">
        <Button type="primary">Go to Home Page</Button>
      </Link>
    </>
  );
}
