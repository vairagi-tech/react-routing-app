// src/pages/User.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const User = () => {
  // Use useLocation to get the current location and query parameters
  const location = useLocation();

  // Get the query parameters from the URL
  const params = new URLSearchParams(location.search);
  const username = params.get('username'); // Extract username from query param

  return (
    <div>
      <h2>Welcome, {username ? username : 'Guest'}!</h2> {/* Display username or 'Guest' if not provided */}
    </div>
  );
};

export default User;
