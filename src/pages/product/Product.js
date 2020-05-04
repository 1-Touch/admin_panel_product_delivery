import React, { useState } from 'react';
import { MDBBtn } from 'mdbreact';
import { useSelector } from 'react-redux';

// Components
import Datatables from '../datatables/DataTables';
import FormModal from '../../components/Modals/FormModal/FormModal';

const Productlist = (props) => {

  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);

  // Selectors
  const { productFormFields, productTableData } = useSelector(
    (state) => state.product
  );

  // Edit Discount Tag :-
  const handleEdit = (e, rowData, id) => {
    setModalTitle('Edit Product');
    handleOpen();
  };

  // Delete Discount Tag :-
  const handleDelete = (e, id) => {};

  const addProduct = () => {
    handleOpen();
    setModalTitle('Add Product');
  };

  // Modal Functions
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const productData = productTableData.map((value, index) => {
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
          onClick={(e) => handleDelete(e, value.id)}
          color='primary'
          size='sm'
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
      <div className=''>
        <div className='col-lg-12'>
          <h2>
            <b>Product List</b>
          </h2>
          <MDBBtn onClick={addProduct} color='primary' title='Add Category'>
            Add Product
          </MDBBtn>
          <div className='discount_table'>
            <Datatables data={productData} type='product' />
          </div>
        </div>
      </div>
      {open && (
        <FormModal
          open={open}
          handleClose={handleClose}
          title={modalTitle}
          formFields={productFormFields}
        />
      )}
    </>
  );
};

export default Productlist;
