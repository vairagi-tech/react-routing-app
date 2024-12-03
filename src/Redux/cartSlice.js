// src/redux/cartSlice.js

const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case 'REMOVE_ITEM':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export const addItemToCart = (item) => ({
    type: 'ADD_ITEM',
    payload: item,
  });
  
  export const removeItemFromCart = (itemId) => ({
    type: 'REMOVE_ITEM',
    payload: { id: itemId },
  });
  
  export default cartReducer;
  