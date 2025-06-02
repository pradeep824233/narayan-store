import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '/images/logo.png';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Narayan Sahu General Store Logo" className="logo-img" />
        </Link>
        <h2 className="logo-text">Narayan Sahu General Store</h2>
      </div>

      <ul className="nav-links">
        {/* <li><Link to="/">Home</Link></li> */}
        <li><Link to="/shop">Shop</Link></li> {/* Changed to single 'Shop' link */}
        <li><Link to="/cart"><FaShoppingCart className="cart-icon" /></Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li> {/* New Login link */}
        <li><Link to="/signup">Signup</Link></li> {/* New Signup link */}
      </ul>
    </nav>
  );
};

export default Navbar;