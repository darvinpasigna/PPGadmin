import React, { useEffect, useState } from 'react';
import '../App.css';

const PCcomp = ({ PC }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch(PC)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setArr(data.data);
        } else {
          console.error("Expected an array but got:", data);
          setArr([]);
        }
      });
  }, [PC]);



  return (
    <div className='PCpage container'>
      {arr.length > 0 ? (
        arr.map((item, index) => (
          <div key={index} className="card">
          <img src={item.main_img} className="card-img-top" alt="products" />
          <div className="card-body p-1">
            <p className="card-text m-0" style={{fontSize: "11px"}}>{item.prod_name}</p>
            <p className="card-text m-0" style={{fontSize: "11px"}}>&#8369;{item.price}</p>
            <p className="card-text m-0" style={{fontSize: "11px"}}>Stocks: {item.stock}</p>
          </div>
        </div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
}

export default PCcomp;
