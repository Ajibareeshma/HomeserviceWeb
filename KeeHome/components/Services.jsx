import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

function Services() {
  const [selectedServices, setSelectedServices] = useState([]);
  const navigate = useNavigate();

  const services = [
    { name: "Deep Cleaning", price: "₹2000", time: "1-2 Days", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIkmNRGT7zTeTojS7lptw5wZV4M37NDpb9g&s" },
    { name: "Vessel Cleaning", price: "₹300", time: "2 Hours", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBL33-uWmmEtTbbdJZ7m9BXZo6SU2CPIdwQ&s" },
    { name: "Bathroom Cleaning", price: "₹500", time: "1-2 Hours", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxyoE0LbfABMiW5O39cFPjmUi0URVdnszEw&s" },
    { name: "Plumbing Repairs", price: "₹500 ", time: "1 Day", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0D1j3SPyhcrhOHJNcyMOvHzEhkzQMxW00w&s" },
    { name: "Sofa Cleaning", price: "₹1,000", time: "1-2 Hours", image: "https://laundryuncle.in/wp-content/uploads/2023/10/Couch-Cleaning-1024x680.jpg" },
    { name: "Carpet Cleaning", price: "₹800", time: "1-2 Hours", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_q8cZiG1d0r8Y0msVRPxvRpw3RKvLaVjo0w&s" },
    { name: "Kitchen Deep Cleaning", price: "₹800", time: "2-3 Hours", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_sZ-mk2xqkvVqQPuM4Cl28_EGAszMkBqmA&s" },
    { name: "Fridge Cleaning", price: " ₹500", time: "1 Hour", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfX-3jnPFx89H6qtqDfAC1KGO2tx8UP84VA&s" },
    { name: "Water Tank Cleaning", price: "₹2,000", time: "2-3 Hours", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uDFTGOErCvmUCuqow-kO_gG-6n4eVaY0_g&s" },
  ];

  const addService = (service) => {
    // Add service if not already added, based on name
    if (!selectedServices.some((s) => s.name === service.name)) {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const removeService = (service) => {
    // Remove service based on name
    setSelectedServices(selectedServices.filter((s) => s.name !== service.name));
  };

  const goToBookServices = () => {
    console.log("Selected services before navigating:", selectedServices); // Debug log
    navigate("/book-services", { state: { selectedServices } });
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-row">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <h3>{service.name}</h3>
            <p>{service.price}</p>
            <p>{service.time}</p>
            <div className="card-buttons">
              <button
                onClick={() => addService(service)}
                className="add-btn"
                disabled={selectedServices.some((s) => s.name === service.name)}
              >
                Add
              </button>
              <button
                onClick={() => removeService(service)}
                className="remove-btn"
                disabled={!selectedServices.some((s) => s.name === service.name)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={goToBookServices} className="add-to-services-btn">
        Book Service ({selectedServices.length})
      </button>
    </div>
  );
}

export default Services;
