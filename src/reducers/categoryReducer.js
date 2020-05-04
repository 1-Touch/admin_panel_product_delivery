const initialState = {
  categoryFormFields: [
    {
      style: { width: '93%' },
      type: 'text',
      label: 'Category Name',
      defaultValue: null,
    }
  ],
  categoryTableData: [
    {
      id: 1,
      category_name: 'Cloths',
      category_owner_name: 'Prasen',
      seller_name: 'James',
    },
    {
      id: 2,
      category_name: 'Electronics',
      category_owner_name: 'Rajat',
      seller_name: 'James',
    },
    {
      id: 3,
      category_name: 'Sports',
      category_owner_name: 'Ashish',
      seller_name: 'James',
    },
    {
      id: 4,
      category_name: 'Kids Toys',
      category_owner_name: 'Deepak',
      seller_name: 'James',
    },
  ],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoryReducer;
