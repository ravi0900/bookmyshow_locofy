import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TicketsBooked.css";

const TicketsBooked = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/movies");
  }, [navigate]);

  return (
    <div className="tickets-booked-div">
      <div className="hurray-div">Hurray!</div>
      <div className="your-tickets-are-booked">Your tickets are booked</div>
      <img className="vector-icon" alt="" src="../vector.svg" />
      <button className="group-button" onClick={onGroupButtonClick}>
        <div className="rectangle-div" />
        <img className="vector-icon1" alt="" src="../vector1.svg" />
      </button>
    </div>
  );
};

export default TicketsBooked;
