import React, { useState } from 'react';
import { MDBBtn } from 'mdbreact';
import { useSelector } from 'react-redux';

// Components
import Datatables from '../datatables/DataTables';
import FormModal from '../../components/Modals/FormModal/FormModal';

const Vendorlist = (props) => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);

  // Selectors
  const { vendorFormFields, vendorTableData } = useSelector(
    (state) => state.vendor
  );

  // Edit Discount Tag :-
  const handleEdit = (e, rowData, id) => {
    setModalTitle('Edit Details');
    handleOpen();
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

  const vendorData = vendorTableData.map((value, index) => {
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
          Delete
        </MDBBtn>
      </div>
    );

    return value;
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
