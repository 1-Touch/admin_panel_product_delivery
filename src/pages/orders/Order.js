import React, { useState } from 'react';
import { MDBBtn } from 'mdbreact';
import { useSelector } from 'react-redux';

// Components
import Datatables from '../datatables/DataTables';
import FormModal from '../../components/Modals/FormModal/FormModal';

const Orderlist = () => {
  const [open, setOpen] = useState(false);

  const { orders, productFormFields } = useSelector( (state) => state.order );

  const handleDecline = (e, id) => {
    setOpen(true);
  }

  const handleAccept = () => {
    
  }

  const handleClose = () => {
    setOpen(false); 
  }

  const orderData = orders.map((value, index) => {
    value.action = (
      <div className='btnStyling'>
        <MDBBtn
          onClick={(e) => handleAccept(e, value, value.id)}
          size='sm'
          color='primary'
          title='Accept'
        >
          Accept
        </MDBBtn>
        <MDBBtn
          onClick={(e) => handleDecline(e, value.id)}
          color='danger'
          size='sm'
          title='Decline'
        >
          Decline
        </MDBBtn>
      </div>
    );

    return value;
  });

  return (
    <>
      <div className=''>
        <div className='col-lg-12'>
          <h2>
            <b>Product List</b>
          </h2>
          <div className='discount_table'>
            <Datatables data={orderData} type='orders' />
          </div>
        </div>
      </div>
      {open && (
        <FormModal
          open={open}
          handleClose={handleClose}
          title="Reason To Decline Order"
          formFields={productFormFields}
        />
      )}
    </>
  );
};

export default Orderlist;
