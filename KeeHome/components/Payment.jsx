import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve booking details from location state
  const { totalAmount, selectedServices, address, serviceDate, serviceTime } = location.state || {};

  // State for selected payment method
  const [paymentMethod, setPaymentMethod] = useState("");

  // Handle payment confirmation
  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    if (paymentMethod === "offline") {
      alert("You selected Offline Payment. Please pay cash during the service.");
    } else {
      alert(`Payment Successful via ${paymentMethod}!`);
    }

    navigate("/confirmation", {
      state: { totalAmount, selectedServices, address, serviceDate, serviceTime },
    });
  };

  // If no data is passed (e.g., user visits directly), redirect to services page
  if (!totalAmount) {
    return (
      <div className="empty-payment">
        <h1>No payment details available!</h1>
        <button onClick={() => navigate("/services")}>Go Back to Services</button>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <div className="payment-details">
        <h3>Booking Details</h3>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Date:</strong> {serviceDate}</p>
        <p><strong>Time:</strong> {serviceTime}</p>
        <h3>Selected Services</h3>
        <ul>
          {selectedServices.map((service, index) => (
            <li key={index}>
              {service.name} - ₹{service.price}
            </li>
          ))}
        </ul>
        <h3>Total Amount: ₹{totalAmount}</h3>
      </div>

      <div className="payment-methods">
        <h3>Select Payment Method</h3>
        <div className="payment-options">
          <label className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              value="gpay"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb43JTTfhxzyd7KbSGn8f5yQgrPEOihJg5Bw&s" // Update with the correct path
              alt="Google Pay"
              className="payment-logo"
            />
            Google Pay (GPay)
          </label>
          <label className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              value="phonepe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRbjdhUaR9O7HJaBNCpHZRbKyV7PwyqOj4Q&s" // Update with the correct path
              alt="PhonePe"
              className="payment-logo"
            />
            PhonePe
          </label>
          <label className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              value="paytm"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNKjCl4Y9y-WYASdyvjMPeN_Zu7k9oNboJA&s" // Update with the correct path
              alt="Paytm"
              className="payment-logo"
            />
            Paytm
          </label>
          <label className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              value="offline"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <img
              src="https://icon-library.com/images/payment-icon/payment-icon-5.jpg" // Update with the correct path
              alt="Offline"
              className="payment-logo"
            />
            Offline Payment (Cash)
          </label>
        </div>
      </div>

      <button className="payment-btn" onClick={handlePayment}>
        Confirm Payment
      </button>
    </div>
  );
}

export default Payment;
