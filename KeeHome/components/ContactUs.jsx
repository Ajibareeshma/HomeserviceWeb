import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out to us using the form below or through our contact details.</p>

      {/* Contact Details Section */}
      <div className="contact-details">
        <h2>Get in Touch</h2>
        <p><strong>📍 Address:</strong> 123 Main Street, City, Country</p>
        <p><strong>📧 Email:</strong> keehomeservice@example.com</p>
        <p><strong>📞 Phone:</strong> +1 99 52 88 44 92</p>
        <p><strong>🕒 Business Hours:</strong> Sun - Sat , 9 AM - 6 PM</p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write your message here"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
