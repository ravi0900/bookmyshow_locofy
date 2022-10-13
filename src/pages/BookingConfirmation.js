import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingConfirmation.css";

const BookingConfirmation = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/booking-4");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/payment-1");
  }, [navigate]);

  const onPayNowButtonClick = useCallback(() => {
    navigate("/payment-1");
  }, [navigate]);

  return (
    <div className="booking-confirmation-div">
      <div className="rectangle-div30" />
      <button className="rectangle-button4" onClick={onRectangleButtonClick} />
      <div className="group-div16">
        <div className="rectangle-div31" />
        <img className="vector-icon16" alt="" src="../vector1.svg" />
      </div>
      <div className="my-ticket-div">My Ticket</div>
      <div className="rectangle-div32" />
      <div className="rectangle-div33" />
      <div className="rectangle-div34" />
      <img className="group-icon9" alt="" src="../group6.svg" />
      <button className="rectangle-button5" onClick={onRectangleButton1Click} />
      <button className="pay-now-button1" onClick={onPayNowButtonClick}>
        Pay Now
      </button>
      <div className="frozen-2-div1">Frozen 2</div>
      <img className="mask-group-icon1" alt="" src="../mask-group1@2x.png" />
      <div className="friday-29-november">Friday, 29 November</div>
      <div className="pvr-forum-mall-kormangala1">
        PVR, Forum Mall, Kormangala
      </div>
      <div className="pm-div10">{`4:00 PM `}</div>
      <div className="f4-f5-div">F4, F5</div>
      <div className="total-amount-rs-400">Total Amount: Rs. 400</div>
    </div>
  );
};

export default BookingConfirmation;
