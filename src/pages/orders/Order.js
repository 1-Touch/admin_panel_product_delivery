import React from 'react';
import { useSelector } from 'react-redux';

// Components
import Datatables from '../datatables/DataTables';

const Orderlist = () => {

  const { orders, productFormFields } = useSelector( (state) => state.order );


  return (
    <>
      <div className=''>
        <div className='col-lg-12'>
          <h2>
            <b>Product List</b>
          </h2>
          <div className='discount_table'>
            <Datatables data={orders} type='orders' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Orderlist;
