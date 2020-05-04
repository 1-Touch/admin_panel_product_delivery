const initialState = {
  productFormFields: [
    {
      style: { width: '93%' },
      type: 'dropdown',
      label: 'Category Name',
      dropdownList: ['Clothes', 'Electronics', 'Household', 'Grocery']
    },
    {
      style: { width: '93%' },
      type: 'text',
      label: 'Product Name',
      defaultValue: null,
    },
    {
      style: { width: '93%' },
      type: 'number',
      label: 'Product Price',
      defaultValue: null,
    }
  ],
  productTableData: [
    {
      id: 1,
      product_name: 'Jeans',
      category_name: 'Cloths',
      vendor_name: 'James',
    },
    {
      id: 1,
      product_name: 'Bulb',
      category_name: 'Electronics',
      vendor_name: 'James ',
    },
    {
      id: 1,
      product_name: 'Bat',
      category_name: 'Sports',
      vendor_name: 'James',
    },
    { id: 1, product_name: 'Car', category_name: 'Toys', vendor_name: 'James' },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
