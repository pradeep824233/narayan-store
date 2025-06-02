import React from 'react';
import './Contact.css'; // Optional: for Contact page specific styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have questions, feedback, or need assistance? Reach out to us!</p>
      
      <div className="contact-info">
        <h3>Our Details</h3>
        <p><strong>Address:</strong> [Opposite To Middle School Pachmahla,Khizersarai], Gaya, Bihar, India</p>
        <p><strong>Phone:</strong> +91-9801213580</p>
        <p><strong>Email:</strong> pradeepkr824233@gmail.com</p>
        <p><strong>Working Hours:</strong> Mon-Sun, 5:30 AM - 9:00 PM</p>
      </div>

      <div className="contact-form-section">
        <h3>Send Us a Message</h3>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;