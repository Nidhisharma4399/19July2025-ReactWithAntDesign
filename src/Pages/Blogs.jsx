import React from 'react';
import { Link } from 'react-router-dom';   // ✅ Import Link
import { Button } from 'antd';             // ✅ Import Button

export default function Blogs() {
  return (
    <>
      <div>Blogs</div>
      <Link to="/Nopage">
        <Button type="primary">Go to No Page</Button>
      </Link>
    </>
  );
}
