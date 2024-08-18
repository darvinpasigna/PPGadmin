import React, { useEffect, useState } from 'react';
import NavBar from '../components/Nav';
import Sidebar from '../components/SideNav';
import PCcomp from '../components/PCcomp';
import axios from 'axios';

const PC = () => {
  const PC = "http://127.0.0.1:8000/api/products";
  const [countPC, setCountPC] = useState(0);

  useEffect(() => {
    axios.get(PC)
      .then((response) => {
        const data = response.data; // Assuming response.data is the entire object
        if (data && Array.isArray(data.data)) {
          setCountPC(data.data.length); // Accessing the array within `data` property
        } else {
          console.error("Expected an array but got:", data);
        }
      })
  }, [PC]);

  return (
   <>
   <NavBar />
   <div className='d-flex'>
   <Sidebar countPC={countPC} />
   <PCcomp PC={PC} />
   </div>
   </>
   
  )
}

export default PC;