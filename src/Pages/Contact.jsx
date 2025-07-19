import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import { Button } from 'antd';            // Import Button

export default function Contact() {
  return (
    <>
      <div>Contact</div>
      <Link to="/blogs">
        <Button type="primary">Go to Blogs Page</Button>
      </Link>
    </>
  );
}
