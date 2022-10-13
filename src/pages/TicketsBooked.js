import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TicketsBooked.css";

const TicketsBooked = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/movies");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="tickets-booked-div">
      <div className="hurray-div">Hurray!</div>
      <div className="your-tickets-are-booked">Your tickets are booked</div>
      <button className="vector-button" data-animate-on-scroll>
        <img className="vector-icon" alt="" src="../vector.svg" />
        <img className="ellipse-icon" alt="" src="../ellipse-1.svg" />
        <img className="ellipse-icon1" alt="" src="../ellipse-4.svg" />
        <img className="ellipse-icon2" alt="" src="../ellipse-5.svg" />
        <img className="ellipse-icon3" alt="" src="../ellipse-6.svg" />
        <img className="ellipse-icon4" alt="" src="../ellipse-2.svg" />
        <img className="ellipse-icon5" alt="" src="../ellipse-3.svg" />
      </button>
      <button className="group-button" onClick={onGroupButtonClick}>
        <div className="rectangle-div" />
        <img className="vector-icon1" alt="" src="../vector1.svg" />
      </button>
    </div>
  );
};

export default TicketsBooked;
