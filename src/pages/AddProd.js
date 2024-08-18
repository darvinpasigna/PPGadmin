import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/SideNav';
import AddProdComp from '../components/AddProdComp';
import axios from 'axios';

const AddProd = () => {
  const PC = "http://127.0.0.1:8000/api/products";
  const [countPC, setCountPC] = useState(0);

  useEffect(() => {
    axios.get(PC)
      .then((response) => {
        const data = response.data;
        if (data && Array.isArray(data.data)) {
          setCountPC(data.data.length);
        } else {
          console.error("Expected an array but got:", data);
        }
      })
  }, [PC]);

  return (
  
    <>
      <Nav />
      <div className='d-flex'>
      <Sidebar countPC={countPC} />
      <AddProdComp />
      </div>
    </>
  );
}

export default AddProd;
