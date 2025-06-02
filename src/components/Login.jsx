import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom'; // Link import karna mat bhoolna

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="username">Username / Email:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="auth-button">Login</button>
        <p className="auth-footer">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default Login;