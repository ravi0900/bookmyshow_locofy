import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking2.css";

const Booking2 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/booking-3");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/booking-confirmation");
  }, [navigate]);

  const onPayNowButtonClick = useCallback(() => {
    navigate("/payment-1");
  }, [navigate]);

  return (
    <div className="booking-2-div">
      <div className="rectangle-div218" />
      <div className="rectangle-div219" />
      <div className="group-div29">
        <div className="rectangle-div220" />
        <img className="vector-icon22" alt="" src="../vector1.svg" />
      </div>
      <div className="frozen-2-div4">Frozen 2</div>
      <div className="friday-29-november-400-pm2">{`Friday, 29 November   4:00 PM `}</div>
      <div className="rectangle-div221" />
      <div className="rectangle-div222" />
      <img className="vector-icon23" alt="" src="../vector-12.svg" />
      <div className="all-eyes-this-way2">All eyes this way!</div>
      <div className="group-div30">
        <div className="rectangle-div223" />
        <div className="rectangle-div224" />
        <div className="rectangle-div225" />
        <div className="rectangle-div226" />
        <div className="rectangle-div227" />
        <div className="rectangle-div228" />
        <div className="rectangle-div229" />
        <div className="rectangle-div230" />
        <div className="rectangle-div231" />
        <div className="rectangle-div232" />
        <div className="rectangle-div233" />
        <div className="rectangle-div234" />
        <div className="rectangle-div235" />
        <div className="rectangle-div236" />
        <div className="rectangle-div237" />
        <div className="rectangle-div238" />
        <div className="rectangle-div239" />
        <div className="rectangle-div240" />
        <div className="rectangle-div241" />
        <div className="rectangle-div242" />
        <div className="rectangle-div243" />
        <div className="rectangle-div244" />
        <div className="rectangle-div245" />
        <div className="rectangle-div246" />
        <div className="group-div31">
          <div className="rectangle-div247" />
          <div className="rectangle-div248" />
          <div className="rectangle-div249" />
          <div className="rectangle-div250" />
          <div className="rectangle-div251" />
          <div className="rectangle-div252" />
          <div className="rectangle-div253" />
          <div className="rectangle-div254" />
          <div className="rectangle-div255" />
          <div className="rectangle-div256" />
          <div className="rectangle-div257" />
          <div className="rectangle-div258" />
          <div className="rectangle-div259" />
          <div className="rectangle-div260" />
          <div className="rectangle-div261" />
          <div className="rectangle-div262" />
          <div className="rectangle-div263" />
          <div className="rectangle-div264" />
          <div className="rectangle-div265" />
          <div className="rectangle-div266" />
          <div className="rectangle-div267" />
          <div className="rectangle-div268" />
          <div className="rectangle-div269" />
          <div className="rectangle-div270" />
          <div className="rectangle-div271" />
          <div className="rectangle-div272" />
          <div className="rectangle-div273" />
          <div className="rectangle-div274" />
          <div className="rectangle-div275" />
          <div className="rectangle-div276" />
        </div>
        <div className="group-div32">
          <div className="rectangle-div247" />
          <div className="rectangle-div248" />
          <div className="rectangle-div249" />
          <div className="rectangle-div250" />
          <div className="rectangle-div251" />
          <div className="rectangle-div282" />
          <div className="rectangle-div253" />
          <div className="rectangle-div254" />
          <div className="rectangle-div255" />
          <div className="rectangle-div256" />
          <div className="rectangle-div257" />
          <div className="rectangle-div258" />
          <div className="rectangle-div259" />
          <div className="rectangle-div260" />
          <div className="rectangle-div261" />
          <div className="rectangle-div262" />
          <div className="rectangle-div263" />
          <div className="rectangle-div264" />
          <div className="rectangle-div295" />
          <div className="rectangle-div296" />
          <div className="rectangle-div267" />
          <div className="rectangle-div298" />
          <div className="rectangle-div299" />
          <div className="rectangle-div270" />
          <div className="rectangle-div271" />
          <div className="rectangle-div272" />
          <div className="rectangle-div303" />
          <div className="rectangle-div304" />
          <div className="rectangle-div305" />
          <div className="rectangle-div306" />
        </div>
        <div className="balcony-rs-150002">Balcony - Rs. 150.00</div>
        <div className="normal-rs-200002">Normal - Rs. 200.00</div>
        <div className="executive-rs-20000">Executive - Rs. 200.00</div>
      </div>
      <div className="group-div33">
        <div className="rectangle-div307" />
        <div className="selected-div2">Selected</div>
      </div>
      <div className="group-div34">
        <div className="rectangle-div308" />
        <div className="available-div2">Available</div>
      </div>
      <div className="unavailable-div2">Unavailable</div>
      <div className="rectangle-div309" />
      <img className="vector-icon24" alt="" src="../vector-2.svg" />
      <div className="how-many-seats-do-you-want-to1">
        <p className="how-many-seats1">How many seats do you</p>
        <p className="want-to-book1">want to book?</p>
      </div>
      <button className="button1" onClick={onButtonClick}>
        1
      </button>
      <button className="button2">2</button>
      <div className="div9">3</div>
      <div className="div10">4</div>
      <div className="div11">5</div>
      <div className="div12">6</div>
      <div className="div13">7</div>
      <div className="div14">8</div>
      <div className="div15">9</div>
      <div className="div16">10</div>
      <div className="group-div35">
        <button
          className="rectangle-button8"
          onClick={onRectangleButtonClick}
        />
        <button className="pay-now-button4" onClick={onPayNowButtonClick}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Booking2;
