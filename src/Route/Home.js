// npx create-react-app react-router-app
// npm install react-router-dom

// import React from "react";

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <p>This is the home page of the React app with routing.</p>
//     </div>
//   );
// };

// export default Home;




// product/productid
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Product Store</h2>
      <p>Click on a product to view its details:</p>
      <ul>
        <li><Link to="/product/1">Product 1</Link></li>
        <li><Link to="/product/2">Product 2</Link></li>
        <li><Link to="/product/3">Product 3</Link></li>
      </ul>
    </div>
  );
};

export default Home;

