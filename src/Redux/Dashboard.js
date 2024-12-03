// src/pages/Dashboard.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../Redux/userInfoSlice';
import { addItemToCart, removeItemFromCart } from '../Redux/cartSlice';

const Dashboard = () => {
  const userInfo = useSelector(state => state.userInfo);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newItem, setNewItem] = useState('');

  const handleAddUserInfo = () => {
    dispatch(setUserInfo(name, email));
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart({ id: Date.now(), name: newItem }));
    setNewItem('');
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div>
      <h2>Welcome, {userInfo.name ? userInfo.name : 'Guest'}</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddUserInfo}>Set User Info</button>
      </div>

      <h3>Your Cart:</h3>
      <input
        type="text"
        placeholder="Add Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddToCart}>Add Item to Cart</button>

      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            {item.name} <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
