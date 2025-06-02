import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom'; // Link import karna mat bhoolna

const Signup = () => {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">Password:</label>
          <input type="password" id="new-password" name="new-password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
        <p className="auth-footer">Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;