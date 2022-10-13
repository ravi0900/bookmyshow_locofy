import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment1.css";

const Payment1 = () => {
  const navigate = useNavigate();

  const onEllipseRadioClick = useCallback(() => {
    navigate("/payment-2");
  }, [navigate]);

  return (
    <div className="payment-1-div">
      <div className="rectangle-div22" />
      <div className="rectangle-div23" />
      <div className="group-div14">
        <div className="rectangle-div24" />
        <img className="vector-icon15" alt="" src="../vector1.svg" />
      </div>
      <div className="choose-a-payment-method1">Choose a payment method</div>
      <div className="group-div15">
        <div className="rectangle-div25" />
        <div className="rectangle-div26" />
        <div className="rectangle-div27" />
        <div className="rectangle-div28" />
        <div className="pay-via-paytm1">Pay Via PayTM</div>
        <div className="pay-via-google-pay1">Pay Via Google Pay</div>
        <div className="pay-via-debitcredit-card1">
          Pay Via Debit/Credit Card
        </div>
        <div className="other-payment-method1">Other Payment Method</div>
        <img className="ellipse-icon11" alt="" src="../ellipse-16.svg" />
        <img className="ellipse-icon12" alt="" src="../ellipse-16.svg" />
        <input
          className="ellipse-input"
          type="radio"
          onClick={onEllipseRadioClick}
        />
        <img className="ellipse-icon13" alt="" src="../ellipse-16.svg" />
        <img className="xmlid-1-icon1" alt="" src="../xmlid-1.svg" />
        <img className="group-icon7" alt="" src="../group4.svg" />
        <img className="xmlid-69-icon1" alt="" src="../xmlid-69.svg" />
        <img className="group-icon8" alt="" src="../group-7.svg" />
      </div>
      <div className="payment-div1">Payment</div>
      <div className="rectangle-div29" />
      <div className="pay-now-div">Pay Now</div>
    </div>
  );
};

export default Payment1;
