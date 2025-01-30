import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./BookServices.css";

function BookServices() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve selected services from location state
  const selectedServices = location.state?.selectedServices || [];

  useEffect(() => {
    console.log("Received selected services in BookServices:", selectedServices);
  }, [selectedServices]);

  // State for user details and booking information
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [serviceDate, setServiceDate] = useState("");
  const [serviceTime, setServiceTime] = useState("");

  // Calculate total price
  const totalAmount = selectedServices.reduce((total, service) => {
    const price = parseInt(service.price.replace(/[^0-9]/g, ""), 10);
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  // If no services are selected, show an empty page with a button to go back
  if (selectedServices.length === 0) {
    return (
      <div className="empty-page">
        <h1>No services selected!</h1>
        <button onClick={() => navigate("/services")}>Go Back to Services</button>
      </div>
    );
  }

  // Handle form field changes
  const handleDateChange = (e) => setServiceDate(e.target.value);
  const handleTimeChange = (e) => setServiceTime(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePhoneChange = (e) => setPhoneNo(e.target.value);

  // Handle form submission
  const handleContinue = async () => {
    if (!username || !phoneNo || !address || !serviceDate || !serviceTime) {
      alert("Please fill in all required fields.");
      return;
    }

    const bookingData = {
      username,
      phoneNo,
      services: selectedServices,
      address,
      serviceDate,
      serviceTime,
      totalAmount,
    };

    try {
      const response = await axios.post("http://localhost:3001/api/book-service", bookingData);
      console.log("Booking successful:", response.data);

      navigate("/payment", {
        state: { totalAmount, selectedServices, username, phoneNo, address, serviceDate, serviceTime },
      });
    } catch (error) {
      console.error("Error making booking:", error);
    }
  };

  return (
    <div className="book-service-container">
      <h1 className="title">Book Service</h1>
      <div className="user-details">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your name"
          required
        />
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phoneNo}
          onChange={handlePhoneChange}
          placeholder="Enter your phone number"
          required
        />
      </div>
      <div className="services-list">
        {selectedServices.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.time}</p>
              <p>₹ {service.price}</p>
            </div>
            <div>
              <label>Select Date:</label>
              <input type="date" value={serviceDate} onChange={handleDateChange} className="date-input" />
            </div>
            <div>
              <label>Select Time:</label>
              <input type="time" value={serviceTime} onChange={handleTimeChange} className="time-input" />
            </div>
          </div>
        ))}
      </div>
      <div className="address-section">
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          required
        />
      </div>
      <div className="total-section">
        <h3>Total Amount:</h3>
        <p>₹ {totalAmount}</p>
      </div>
      <button className="continue-btn" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default BookServices;
