import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment2.css";

const Payment2 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/booking-4");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/tickets-booked");
  }, [navigate]);

  const onPayNowButtonClick = useCallback(() => {
    navigate("/tickets-booked");
  }, [navigate]);

  return (
    <div className="payment-2-div">
      <div className="rectangle-div16" />
      <button className="rectangle-button2" onClick={onRectangleButtonClick} />
      <div className="group-div13">
        <div className="rectangle-div17" />
        <img className="vector-icon14" alt="" src="../vector1.svg" />
      </div>
      <div className="choose-a-payment-method">Choose a payment method</div>
      <div className="rectangle-div18" />
      <div className="rectangle-div19" />
      <div className="rectangle-div20" />
      <div className="rectangle-div21" />
      <div className="pay-via-paytm">Pay Via PayTM</div>
      <div className="pay-via-google-pay">Pay Via Google Pay</div>
      <div className="pay-via-debitcredit-card">Pay Via Debit/Credit Card</div>
      <div className="other-payment-method">Other Payment Method</div>
      <img className="ellipse-icon6" alt="" src="../ellipse-16.svg" />
      <img className="ellipse-icon7" alt="" src="../ellipse-16.svg" />
      <img className="ellipse-icon8" alt="" src="../ellipse-18.svg" />
      <img className="ellipse-icon9" alt="" src="../ellipse-16.svg" />
      <img className="xmlid-1-icon" alt="" src="../xmlid-1.svg" />
      <img className="group-icon5" alt="" src="../group4.svg" />
      <img className="xmlid-69-icon" alt="" src="../xmlid-69.svg" />
      <img className="group-icon6" alt="" src="../group-7.svg" />
      <div className="payment-div">Payment</div>
      <button className="rectangle-button3" onClick={onRectangleButton1Click} />
      <button className="pay-now-button" onClick={onPayNowButtonClick}>
        Pay Now
      </button>
      <img className="ellipse-icon10" alt="" src="../ellipse-20.svg" />
    </div>
  );
};

export default Payment2;
