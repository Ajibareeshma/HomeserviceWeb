import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-us-container">
      <h1>About Kee Home Service</h1>
      <p>
        Welcome to Kee Home Service! We are your trusted partner in providing 
        top-notch home services to make your life easier. From professional cleaning 
        to reliable repairs and maintenance, our goal is to take the stress out of 
        managing your home.
      </p>
      <h2>Our Mission</h2>
      <p>
        At Kee Home Service, our mission is to deliver high-quality, affordable, 
        and efficient services right to your doorstep. We aim to simplify your life 
        by offering a one-stop solution for all your home service needs, backed by a 
        team of trained professionals.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Professional and experienced staff</li>
        <li>Affordable and transparent pricing</li>
        <li>Reliable and timely service delivery</li>
        <li>Comprehensive range of home services</li>
      </ul>
      <h2>Our Services</h2>
      <p>We offer a wide range of services, including:</p>
      <ul>
        <li>Home cleaning and sanitization</li>
        <li>Plumbing and electrical repairs</li>
        <li>Appliance installation and maintenance</li>
        <li>Pest control and garden care</li>
        <li>Painting and renovation assistance</li>
      </ul>
      <h2>Customer Reviews</h2>
      <div className="reviews-section">
        <div className="review">
          <p>
            <strong>John Doe:</strong> "Kee Home Service is amazing! Their team is 
            professional, efficient, and always on time. My home has never looked 
            better!"
          </p>
        </div>
        <div className="review">
          <p>
            <strong>Jane Smith:</strong> "I’m so impressed with the quality of their 
            services. They cleaned my house and fixed my leaking pipes all in one day. 
            Highly recommend!"
          </p>
        </div>
        <div className="review">
          <p>
            <strong>Rahul Gupta:</strong> "Excellent service and very friendly staff. 
            They even helped me with some last-minute cleaning before a family event. 
            Will definitely use them again!"
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default About;
