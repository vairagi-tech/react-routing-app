// store.js
// import { createStore } from 'redux';
// import counterReducer from './counterSlice';

// const store = createStore(counterReducer);

// export default store;


//to-do list store.js 
// src/redux/store.js
// import { createStore } from 'redux';
// import todoReducer from './todoSlice';

// // Create Redux store
// const store = createStore(todoReducer);

// export default store;






// combine slice info and cart 
// src/redux/store.js

import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;

