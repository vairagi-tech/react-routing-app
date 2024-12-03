// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import necessary router components
// import Home from "./Route/Home";
// import About from "./Route/About";
// import Contact from "./Route/Contact";
// import './App.css'; // Import your CSS file

// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* Navigation Links */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Define Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



// Redux Store 
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './Redux/counterSlice';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// const Home = () => {
//   const count = useSelector((state) => state.count);  // Access Redux state
//   const dispatch = useDispatch();  // Access Redux dispatch function

//   return (
//     <div>
//       <h2>Home Page</h2>
//       <h3>Counter: {count}</h3>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// };

// const About = () => {
//   return <h2>About Page</h2>;
// };

// const Contact = () => {
//   return <h2>Contact Page</h2>;
// };

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



// to do list app.js 
// src/App.js

// import React from 'react';
// import TodoList from './components/TodoList';

// const App = () => {
//   return (
//     <div>
//       <h1>Simple Todo App</h1>
//       <TodoList />  {/* Render the TodoList component */}
//     </div>
//   );
// };

// export default App;





// user router 
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Route/Home';
// import About from './Route/About';
// import User from './Route/User';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* Navigation Links */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/user?username=John">User</Link> {/* User link with query param */}
//             </li>
//           </ul>
//         </nav>

//         {/* Routing */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user" element={<User />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;






// redux slice info and cart 
// src/App.js
// import React from 'react';
// import Dashboard from './Redux/Dashboard';

// const App = () => {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// };

// export default App;







// product/productid
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Route/Home';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Router>
      <div>
        <h1>Product Store</h1>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          
          {/* Product Page with dynamic route */}
          <Route path="/product/:productid" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

