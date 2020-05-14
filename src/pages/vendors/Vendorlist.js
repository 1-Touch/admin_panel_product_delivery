import React, { useState, useEffect } from 'react';
import { MDBBtn } from 'mdbreact';

// Components
import Datatables from '../datatables/DataTables';
import FormModal from '../../components/Modals/FormModal/FormModal';

import { useSelector, connect, useDispatch } from 'react-redux';
import { vendorList } from '../../actions/VendorAction';

const Vendorlist = (props) => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);

  let user_id = 1 ;
  window.title = "Product Vendors" ;

  // Selectors
  const { vendorFormFields, vendorTableData, isLoading } = useSelector(
    (state) => state.vendor
  );

  // Dispatch an action :- 
  const dispatchAction = useDispatch();

  useEffect( () => {
    const dashboardDetails = dispatchAction(vendorList(user_id));  
    console.log(dashboardDetails);
  },[vendorTableData]);


  // Edit Discount Tag :-
  const handleEdit = (e, rowData, id) => {
    setModalTitle('Edit Details');
    handleOpen();
  };

  // Edit Discount Tag :-
  const handleActive = (e, rowData, id) => {

  };

  // Edit Discount Tag :-
  const handleDeActive = (e, rowData, id) => {
    
  };

  // Delete Discount Tag :-
  const handleDelete = (e, id) => {};

  const addCategory = () => {
    handleOpen();
    setModalTitle('Add Details');
  };

  // Modal Functions
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // For the activated vendor :-
  const vendorData = vendorTableData.map((value, index) => {
    
    if(value.is_active == 1 && value.is_requested == 1){

        value.action = (
        <div className='btnStyling'>
          <MDBBtn
            onClick={(e) => handleEdit(e, value, value._id)}
            size='sm'
            color='primary'
            title='Edit'
          >
            Edit
          </MDBBtn>
           <MDBBtn
            onClick={(e) => handleDelete(e, value._id)}
            size='sm'
            color='primary'
            title='Delete'
          >
            Decline
          </MDBBtn>
          <MDBBtn
            onClick={(e) => handleDelete(e, value._id)}
            size='sm'
            color='primary'
            title='Delete'
          >
            Delete
          </MDBBtn>
        </div>
      );
    }

    if( value.is_active == 0 && value.is_requested == 1){
      
        value.action = (
        <div className='btnStyling'>
          <MDBBtn
            onClick={(e) => handleActive(e, value, value._id)}
            size='sm'
            color='primary'
            title='Edit'
          >
            Activate
          </MDBBtn>
          <MDBBtn
            onClick={(e) => handleDelete(e, value._id)}
            size='sm'
            color='primary'
            title='Delete'
          >
            Delete
          </MDBBtn>
        </div>
      );
    }


    if(value.is_requested == 0 && value.is_active == 0){
      
        value.action = (
        <div className='btnStyling'>
          <MDBBtn
            onClick={(e) => handleActive(e, value, value._id)}
            size='sm'
            color='primary'
            title='Edit'
          >
            Activate
          </MDBBtn>
          <MDBBtn
            onClick={(e) => handleDeActive(e, value._id)}
            size='sm'
            color='primary'
            title='Delete'
          >
            Decline
          </MDBBtn>
          <MDBBtn
            onClick={(e) => handleDelete(e, value._id)}
            size='sm'
            color='primary'
            title='Delete'
          >
            Delete
          </MDBBtn>
        </div>
      );
    }

    return value ;
    
  });


  return (
    <>
      <div className='row whole_sale'>
        <div className='col-lg-12'>
          <h2>
            <b>Vendor List</b>
          </h2>
          <MDBBtn onClick={addCategory} color='primary' title='Add Vendor'>
            Add Vendor
          </MDBBtn>
          <div className='discount_table'>
            <Datatables data={vendorData} type='vendor' />
          </div>
        </div>
      </div>
      {open && (
        <FormModal
          open={open}
          handleClose={handleClose}
          title={modalTitle}
          formFields={vendorFormFields}
        />
      )}
    </>
  );
};

// React.memo Component Is USed to Prevent Unwanted Renndring
// export default React.memo(DiscountTagList);
export default Vendorlist;
