import React, { useState } from 'react';
import { MDBBtn } from 'mdbreact';
import { useSelector } from 'react-redux';
// Components
import Datatables from '../datatables/DataTables';
import FormModal from '../../components/Modals/FormModal/FormModal';

const Categorylist = (props) => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);

  // Selectors
  const { categoryFormFields, categoryTableData } = useSelector(
    (state) => state.category
  );

  // Edit Discount Tag :-
  const handleEdit = (e, rowData, id) => {
    setModalTitle('Edit Category');
    handleOpen();
  };

  // Delete Discount Tag :-
  const handleDelete = (e, id) => {};

  const showCategoryDetails = (e, id) => {
    console.log(id);
    props.history.push(`/app/product/${id}`);
  };

  const addCategory = () => {
    handleOpen();
    setModalTitle('Add Category');
  };

  // Modal Functions
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const categoryData = categoryTableData.map((value, index) => {
    value.action = (
      <div className='btnStyling'>
        <MDBBtn
          onClick={(e) => handleEdit(e, value, value.id)}
          size='sm'
          color='primary'
          title='Edit'
        >
          Edit
        </MDBBtn>
        <MDBBtn
          onClick={(e) => handleDelete(e, value._id)}
          color='primary'
          size='sm'
          title='Delete'
        >
          Delete
        </MDBBtn>
        <MDBBtn
          onClick={(e) => showCategoryDetails(e, value.id)}
          color='primary'
          size='sm'
          title='Delete'
        >
          Details
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
            <b>Category List</b>
          </h2>
          <MDBBtn onClick={addCategory} color='primary' title='Add Category'>
            Add Category
          </MDBBtn>
          <div className='discount_table'>
            <Datatables data={categoryData} type='category' />
          </div>
        </div>
      </div>
      {open && (
        <FormModal
          open={open}
          handleClose={handleClose}
          title={modalTitle}
          formFields={categoryFormFields}
        />
      )}
    </>
  );
};

export default Categorylist;
