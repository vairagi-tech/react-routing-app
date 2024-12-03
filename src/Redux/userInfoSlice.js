// src/redux/userInfoSlice.js

const initialState = {
    name: '',
    email: '',
  };
  
  const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_INFO':
        return {
          ...state,
          name: action.payload.name,
          email: action.payload.email,
        };
      default:
        return state;
    }
  };
  
  export const setUserInfo = (name, email) => ({
    type: 'SET_USER_INFO',
    payload: { name, email },
  });
  
  export default userInfoReducer;
  