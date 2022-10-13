import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking3.css";

const Booking3 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/booking-4");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/booking-confirmation");
  }, [navigate]);

  const onPayNowButtonClick = useCallback(() => {
    navigate("/payment-1");
  }, [navigate]);

  return (
    <div className="booking-3-div">
      <div className="rectangle-div126" />
      <div className="rectangle-div127" />
      <div className="group-div23">
        <div className="rectangle-div128" />
        <img className="vector-icon19" alt="" src="../vector1.svg" />
      </div>
      <div className="frozen-2-div3">Frozen 2</div>
      <div className="friday-29-november-400-pm1">{`Friday, 29 November   4:00 PM `}</div>
      <div className="rectangle-div129" />
      <div className="rectangle-div130" />
      <img className="vector-icon20" alt="" src="../vector-11.svg" />
      <div className="all-eyes-this-way1">All eyes this way!</div>
      <div className="group-div24">
        <div className="rectangle-div131" />
        <div className="rectangle-div132" />
        <div className="rectangle-div133" />
        <div className="rectangle-div134" />
        <div className="rectangle-div135" />
        <div className="rectangle-div136" />
        <div className="rectangle-div137" />
        <div className="rectangle-div138" />
        <div className="rectangle-div139" />
        <div className="rectangle-div140" />
        <div className="rectangle-div141" />
        <div className="rectangle-div142" />
        <div className="rectangle-div143" />
        <div className="rectangle-div144" />
        <div className="rectangle-div145" />
        <div className="rectangle-div146" />
        <div className="rectangle-div147" />
        <div className="rectangle-div148" />
        <div className="rectangle-div149" />
        <div className="rectangle-div150" />
        <div className="rectangle-div151" />
        <div className="rectangle-div152" />
        <div className="rectangle-div153" />
        <div className="rectangle-div154" />
        <div className="group-div25">
          <div className="rectangle-div155" />
          <div className="rectangle-div156" />
          <div className="rectangle-div157" />
          <div className="rectangle-div158" />
          <div className="rectangle-div159" />
          <div className="rectangle-div160" />
          <div className="rectangle-div161" />
          <div className="rectangle-div162" />
          <div className="rectangle-div163" />
          <div className="rectangle-div164" />
          <div className="rectangle-div165" />
          <div className="rectangle-div166" />
          <div className="rectangle-div167" />
          <div className="rectangle-div168" />
          <div className="rectangle-div169" />
          <div className="rectangle-div170" />
          <div className="rectangle-div171" />
          <div className="rectangle-div172" />
          <div className="rectangle-div173" />
          <div className="rectangle-div174" />
          <div className="rectangle-div175" />
          <div className="rectangle-div176" />
          <div className="rectangle-div177" />
          <div className="rectangle-div178" />
          <div className="rectangle-div179" />
          <div className="rectangle-div180" />
          <div className="rectangle-div181" />
          <div className="rectangle-div182" />
          <div className="rectangle-div183" />
          <div className="rectangle-div184" />
        </div>
        <div className="group-div26">
          <div className="rectangle-div155" />
          <div className="rectangle-div156" />
          <div className="rectangle-div157" />
          <div className="rectangle-div158" />
          <div className="rectangle-div159" />
          <div className="rectangle-div190" />
          <div className="rectangle-div161" />
          <div className="rectangle-div162" />
          <div className="rectangle-div163" />
          <div className="rectangle-div164" />
          <div className="rectangle-div165" />
          <div className="rectangle-div166" />
          <div className="rectangle-div167" />
          <div className="rectangle-div168" />
          <div className="rectangle-div169" />
          <div className="rectangle-div170" />
          <div className="rectangle-div171" />
          <div className="rectangle-div172" />
          <div className="rectangle-div203" />
          <div className="rectangle-div204" />
          <div className="rectangle-div175" />
          <div className="rectangle-div206" />
          <div className="rectangle-div207" />
          <div className="rectangle-div178" />
          <div className="rectangle-div179" />
          <div className="rectangle-div180" />
          <div className="rectangle-div211" />
          <div className="rectangle-div212" />
          <div className="rectangle-div213" />
          <div className="rectangle-div214" />
        </div>
        <div className="balcony-rs-150001">Balcony - Rs. 150.00</div>
        <div className="normal-rs-200001">Normal - Rs. 200.00</div>
        <div className="executive-rs-250001">Executive - Rs. 250.00</div>
      </div>
      <div className="group-div27">
        <div className="rectangle-div215" />
        <div className="selected-div1">Selected</div>
      </div>
      <div className="group-div28">
        <div className="rectangle-div216" />
        <div className="available-div1">Available</div>
      </div>
      <div className="unavailable-div1">Unavailable</div>
      <div className="rectangle-div217" />
      <img className="vector-icon21" alt="" src="../vector-2.svg" />
      <div className="how-many-seats-do-you-want-to">
        <p className="how-many-seats">How many seats do you</p>
        <p className="want-to-book">want to book?</p>
      </div>
      <img className="ellipse-icon8" alt="" src="../ellipse-10.svg" />
      <div className="div">1</div>
      <button className="button" onClick={onButtonClick}>
        2
      </button>
      <div className="div1">3</div>
      <div className="div2">4</div>
      <div className="div3">5</div>
      <div className="div4">6</div>
      <div className="div5">7</div>
      <div className="div6">8</div>
      <div className="div7">9</div>
      <div className="div8">10</div>
      <button className="rectangle-button7" onClick={onRectangleButtonClick} />
      <button className="pay-now-button3" onClick={onPayNowButtonClick}>
        Pay Now
      </button>
    </div>
  );
};

export default Booking3;
