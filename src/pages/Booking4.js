import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking4.css";

const Booking4 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/booking-confirmation");
  }, [navigate]);

  const onPayNowButtonClick = useCallback(() => {
    navigate("/payment-1");
  }, [navigate]);

  return (
    <div className="booking-4-div">
      <div className="rectangle-div35" />
      <div className="rectangle-div36" />
      <div className="group-div17">
        <div className="rectangle-div37" />
        <img className="vector-icon17" alt="" src="../vector1.svg" />
      </div>
      <div className="frozen-2-div2">Frozen 2</div>
      <div className="friday-29-november-400-pm">{`Friday, 29 November   4:00 PM `}</div>
      <div className="rectangle-div38" />
      <div className="rectangle-div39" />
      <img className="vector-icon18" alt="" src="../vector-1.svg" />
      <div className="all-eyes-this-way">All eyes this way!</div>
      <div className="group-div18">
        <div className="rectangle-div40" />
        <div className="rectangle-div41" />
        <div className="rectangle-div42" />
        <div className="rectangle-div43" />
        <div className="rectangle-div44" />
        <div className="rectangle-div45" />
        <div className="rectangle-div46" />
        <div className="rectangle-div47" />
        <div className="rectangle-div48" />
        <div className="rectangle-div49" />
        <div className="rectangle-div50" />
        <div className="rectangle-div51" />
        <div className="rectangle-div52" />
        <div className="rectangle-div53" />
        <div className="rectangle-div54" />
        <div className="rectangle-div55" />
        <div className="rectangle-div56" />
        <div className="rectangle-div57" />
        <div className="rectangle-div58" />
        <div className="rectangle-div59" />
        <div className="rectangle-div60" />
        <div className="rectangle-div61" />
        <div className="rectangle-div62" />
        <div className="rectangle-div63" />
        <div className="group-div19">
          <div className="rectangle-div64" />
          <div className="rectangle-div65" />
          <div className="rectangle-div66" />
          <div className="rectangle-div67" />
          <div className="rectangle-div68" />
          <div className="rectangle-div69" />
          <div className="rectangle-div70" />
          <div className="rectangle-div71" />
          <div className="rectangle-div72" />
          <div className="rectangle-div73" />
          <div className="rectangle-div74" />
          <div className="rectangle-div75" />
          <div className="rectangle-div76" />
          <div className="rectangle-div77" />
          <div className="rectangle-div78" />
          <div className="rectangle-div79" />
          <div className="rectangle-div80" />
          <div className="rectangle-div81" />
          <div className="rectangle-div82" />
          <div className="rectangle-div83" />
          <div className="rectangle-div84" />
          <div className="rectangle-div85" />
          <div className="rectangle-div86" />
          <div className="rectangle-div87" />
          <div className="rectangle-div88" />
          <div className="rectangle-div89" />
          <div className="rectangle-div90" />
          <div className="rectangle-div91" />
          <div className="rectangle-div92" />
          <div className="rectangle-div93" />
        </div>
        <div className="group-div20">
          <div className="rectangle-div64" />
          <div className="rectangle-div65" />
          <div className="rectangle-div66" />
          <div className="rectangle-div67" />
          <div className="rectangle-div68" />
          <div className="rectangle-div99" />
          <div className="rectangle-div70" />
          <div className="rectangle-div71" />
          <div className="rectangle-div72" />
          <div className="rectangle-div73" />
          <div className="rectangle-div74" />
          <div className="rectangle-div75" />
          <div className="rectangle-div76" />
          <div className="rectangle-div77" />
          <div className="rectangle-div78" />
          <div className="rectangle-div79" />
          <div className="rectangle-div80" />
          <div className="rectangle-div81" />
          <div className="rectangle-div112" />
          <div className="rectangle-div113" />
          <div className="rectangle-div84" />
          <div className="rectangle-div115" />
          <div className="rectangle-div116" />
          <div className="rectangle-div87" />
          <div className="rectangle-div88" />
          <div className="rectangle-div89" />
          <div className="rectangle-div120" />
          <div className="rectangle-div121" />
          <div className="rectangle-div122" />
          <div className="rectangle-div123" />
        </div>
        <div className="balcony-rs-15000">Balcony - Rs. 150.00</div>
        <div className="normal-rs-20000">Normal - Rs. 200.00</div>
        <div className="executive-rs-25000">Executive - Rs. 250.00</div>
      </div>
      <div className="group-div21">
        <div className="rectangle-div124" />
        <div className="selected-div">Selected</div>
      </div>
      <div className="group-div22">
        <div className="rectangle-div125" />
        <div className="available-div">Available</div>
      </div>
      <div className="unavailable-div">Unavailable</div>
      <button className="rectangle-button6" onClick={onRectangleButtonClick} />
      <button className="pay-now-button2" onClick={onPayNowButtonClick}>
        Pay Now
      </button>
    </div>
  );
};

export default Booking4;
