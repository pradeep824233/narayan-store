import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 MyShop. All Rights Reserved.</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> | 
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a> | 
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
