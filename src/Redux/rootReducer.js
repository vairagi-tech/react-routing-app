// src/redux/rootReducer.js

import { combineReducers } from 'redux';
import userInfoReducer from './userInfoSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  cart: cartReducer,
});

export default rootReducer;
