import React from 'react';
import '../App.css';

const Dashcont = () => {
  return (
    <div className='dashcont container'>
        <div className='row' id='content'>
            <div className='col-3'>
                <button type='button' id='pending'>PENDING ORDERS <br /> 10 </button>
            </div>
            <div className='col-3'>
            <button type='button' id='ship'>ONGOING SHIPMENT <br /> 10</button>
            </div>
            <div className='col-3'>
            <button type='button' id='compltd'>COMPLETED <br /> 10</button>
            </div>
            <div className='col-3'>
            <button type='button' id='ret'>RETURN/REFUND <br /> 10</button>
            </div>
        </div>

        {/* table */}
        <table className="table mt-5">
            <thead>
                <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Order Date</th>
                <th scope="col">Delivery Date</th>
                <th scope="col">Total Price</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                <tr>
                <th scope="row">1</th>
                <td>COD</td>
                <td>8/31/24</td>
                <td>9/5/24</td>
                <td>4,000</td>
                <td>pending</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Dashcont;