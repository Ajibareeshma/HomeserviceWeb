import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    fetch("http://localhost:3001/home")
      .then((res) => res.json())
      .then((data) => {
        // Update state with fetched data
        setTagline(data.tagline);
        setWelcomeMessage(data.welcomeMessage);
        setDescription(data.description);
        setSlides(data.slides);
      })
      .catch((error) => console.error("Error fetching home content:", error));
  }, []);
  

  // Function to control the slideshow transition
  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      if (prevIndex + n > 3) return 1;
      if (prevIndex + n < 1) return 3;
      return prevIndex + n;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    // Automatically advance slides every 3 seconds
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex === 3 ? 1 : prevIndex + 1));
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main-content">
      <div className="text-content">
        <h2 className="tagline">"Your Home, Our Care – Expert Services at Your Doorstep!"</h2>
        <p className="welcome-message">"Welcome to KEE HOME SERVICE – Your Trusted Partner for Home Services!"</p>
        <Link to="/services">
          <button className="service-btn">Book a Service Now</button>
        </Link>
        <p className="description">
          "At KEE HOME SERVICE, we understand the importance of a clean, well-maintained home.
          With professional, experienced staff and affordable prices, we bring convenience and reliability
          to your doorstep. Your satisfaction is our priority!"
        </p>
      </div>

      <div className="slideshow-container">
        {/* Slide 1 */}
        <div className={`mySlides ${slideIndex === 1 ? "active" : ""}`}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuc4pnuu2oWuzW6Trc_OpjemBWYl-91fh_7Q&s"
            alt="Image 1"
            style={{ width: "100%" }} 
          />
          <div className="text">Caption Text 1</div>
        </div>

        {/* Slide 2 */}
        <div className={`mySlides ${slideIndex === 2 ? "active" : ""}`}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdqLTV9IXCzcGa7s7eDt8oOr6_NdaNu192g&s"
            alt="Image 2"
            style={{ width: "100%" }} 
          />
          <div className="text">Caption Text 2</div>
        </div>

        {/* Slide 3 */}
        <div className={`mySlides ${slideIndex === 3 ? "active" : ""}`}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntgvZh-GkRouY6X-oGZHTj-9sTsvIjITM3g&s"
            alt="Image 3"
            style={{ width: "100%" }} 
          />
          <div className="text">Caption Text 3</div>
        </div>

        {/* Navigation Arrows */}
        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>

        {/* Dots container */}
        <div className="dot-container">
          <span
            className={`dot ${slideIndex === 1 ? "active" : ""}`}
            onClick={() => currentSlide(1)}
          ></span>
          <span
            className={`dot ${slideIndex === 2 ? "active" : ""}`}
            onClick={() => currentSlide(2)}
          ></span>
          <span
            className={`dot ${slideIndex === 3 ? "active" : ""}`}
            onClick={() => currentSlide(3)}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
