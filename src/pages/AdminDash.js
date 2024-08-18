import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/SideNav';
import Dashcont from '../components/Dashcont';
import axios from 'axios';

const AdminDash = () => {
  const produrl = "http://127.0.0.1:8000/api/products";
  const [countPC, setCountPC] = useState(0);

  useEffect(() => {
    axios.get(produrl)
      .then((response) => {
        const data = response.data;
        if (data && Array.isArray(data.data)) {
          setCountPC(data.data.length);
        } else {
          console.error("Expected an array but got:", data);
        }
      })
  }, [produrl]);

  return (
    <>
      <Nav />
      <div className='d-flex'>
        <Sidebar countPC={countPC} />
        <Dashcont />
      </div>
    </>
  );
};

export default AdminDash;
