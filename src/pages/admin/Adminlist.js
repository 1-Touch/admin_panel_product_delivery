import React, { useState } from 'react';
import { MDBBtn } from 'mdbreact';
import { useSelector } from 'react-redux';

// Components
import Datatables from '../datatables/DataTables';
import FormModal from '../../components/Modals/FormModal/FormModal';

const Adminlist = () => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);

  // Selectors
  const { adminFormFields, adminTableData } = useSelector((state) => state.admin);

  // Edit Discount Tag :-
  const handleEdit = (e, rowData, id) => {
    setModalTitle('Edit Details');
    handleOpen();
  };

  // Delete Discount Tag :-
  const handleDelete = async (e, id) => {};

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

  const adminData = adminTableData.map((value, index) => {
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
            <b>Seller List</b>
          </h2>
          <MDBBtn onClick={addCategory} color='primary' title='Add Vendor'>
            Add Seller
          </MDBBtn>
          <div className='discount_table'>
            <Datatables data={adminData} type='vendor' />
          </div>
        </div>
      </div>
      {open && (
        <FormModal
          open={open}
          handleClose={handleClose}
          title={modalTitle}
          formFields={adminFormFields}
        />
      )}
    </>
  );
};

export default Adminlist;
