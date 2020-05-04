import { combineReducers } from 'redux';

// Reducers
import authReducer from './authReducer';
import vendorReducer from './vendorReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import adminReducer from './adminReducer';
import dashboardReducers from './dashboardReducer'
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  vendor: vendorReducer,
  category: categoryReducer,
  product: productReducer,
  admin: adminReducer,
  dashboard : dashboardReducers,
  order : orderReducer,
});

export default rootReducer;
