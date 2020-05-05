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
      style: { width: '45%' },
      type: 'number',
      label: 'Product Quantity Available ',
      defaultValue: null,
    },
    {
      style: { width: '45%' },
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
      available_product_quantity: 200,
      product_price: "20$",
    },
    {
      id: 2,
      product_name: 'Bulb',
      category_name: 'Electronics',
      vendor_name: 'James ',
      available_product_quantity: 450,
      product_price: "15$",
    },
    {
      id: 3,
      product_name: 'Bat',
      category_name: 'Sports',
      vendor_name: 'James',
      available_product_quantity: 250,
      product_price: "25$",
    },
    { id: 4, product_name: 'Car', category_name: 'Toys', vendor_name: 'James', available_product_quantity: 300, product_price: "30$", },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;