const initialState = {
  isLogged: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return (state.isLogged = true);
    break;  
    case 'LOGOUT':
      return (state.isLogged = false);
    break;  
    default:
      return state;
  }
};

export default authReducer;
