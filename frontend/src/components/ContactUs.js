import React from 'react';
import '../CSS/contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <div className="contact-details">
          <h1>Contact</h1>
          <p className="contact-description">Fill up the form below to contact</p>
          <div className="contact-info">
            <button className="contact-button">
              <span className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone">
                  <path d="M3 3L21 21"></path>
                </svg>
              </span>
              +91-988888888
            </button>
            <button className="contact-button">
              <span className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                  <path d="M22 5.6L12 13L2 5.6"></path>
                </svg>
              </span>
              hello@abc.com
            </button>
            <button className="contact-button">
              <span className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
                  <path d="M21 10.5C21 18 12 23 12 23C12 23 3 18 3 10.5C3 9.12 3.84 7.88 5.24 7.22M12 22V11"></path>
                </svg>
              </span>
              Karnavati, India
            </button>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <h2>Get in Touch</h2>
            <div className="form-group">
              <input type="text" placeholder='Enter your name' id="name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder='Enter your email' id="email" required />
            </div>
            <div className="form-group">
  
              <textarea rows={8} style={{width:"300px"}} id="message" placeholder='Enter your message...' required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
