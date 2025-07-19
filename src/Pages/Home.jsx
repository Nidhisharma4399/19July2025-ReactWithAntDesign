import React from 'react'
import { Link } from 'react-router-dom';  // Import Link
import { Button } from 'antd';            // Import Button


export default function Home() {
  return (
    <>
    <div>Home</div>
     <Link to="/Contact">
        <Button type="primary">Go to Contact Page</Button>
      </Link>
    </>
  )
}
