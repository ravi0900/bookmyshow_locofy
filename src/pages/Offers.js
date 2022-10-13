import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Offers.css";

const Offers = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/theatres");
  }, [navigate]);

  const onReedemButtonClick = useCallback(() => {
    navigate("/theatresmovies");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/theatres");
  }, [navigate]);

  const onReedemButton1Click = useCallback(() => {
    navigate("/theatresmovies");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/movies");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/theatres");
  }, [navigate]);

  return (
    <div className="offers-div">
      <div className="rectangle-div1" />
      <div className="rectangle-div2" />
      <div className="location-div">
        <div className="rectangle-div3" />
        <img className="vector-icon2" alt="" src="../vector2.svg" />
      </div>
      <div className="bangalore-div">Bangalore</div>
      <div className="notification-div">
        <div className="rectangle-div3" />
        <img className="vector-icon3" alt="" src="../vector3.svg" />
      </div>
      <div className="search-div">
        <div className="rectangle-div3" />
        <img className="vector-icon4" alt="" src="../vector4.svg" />
      </div>
      <img className="group-icon" alt="" src="../group.svg" />
      <button className="rectangle-button" onClick={onRectangleButtonClick} />
      <button className="reedem-button" onClick={onReedemButtonClick}>
        Reedem
      </button>
      <img
        className="hdfc-bank-logo-1-icon"
        alt=""
        src="../hdfc-bank-logo-1@2x.png"
      />
      <div className="get-a-25-discount-on-movie-ti">
        <p className="on-movie-tickets">Get a 25% discount</p>
        <p className="on-movie-tickets">on movie tickets.</p>
        <p className="on-movie-tickets">&nbsp;</p>
        <p className="on-movie-tickets">Max discount per</p>
        <p className="code-mobibms-p">transaction Rs. 300</p>
      </div>
      <img className="group-icon1" alt="" src="../group1.svg" />
      <button className="rectangle-button1" onClick={onRectangleButton1Click} />
      <button className="reedem-button1" onClick={onReedemButton1Click}>
        Reedem
      </button>
      <div className="supercash-offer-get-flat-20-u">
        <p className="on-movie-tickets">SuperCash Offer</p>
        <p className="on-movie-tickets">Get flat 20% upto Rs. 200</p>
        <p className="on-movie-tickets">&nbsp;</p>
        <p className="code-mobibms-p">Code: MOBIBMS</p>
      </div>
      <img className="group-icon2" alt="" src="../group2.svg" />
      <i className="bogo-offer-i">BOGO OFFER</i>
      <div className="buy-1-get-1-free">Buy 1 Get 1 Free</div>
      <img
        className="mobikwik-logo-1-icon"
        alt=""
        src="../mobikwiklogo-1@2x.png"
      />
      <div className="nav-div">
        <div className="rectangle-div6" />
        <img className="group-icon3" alt="" src="../group3.svg" />
        <img className="group-icon4" alt="" src="../group-2.svg" />
        <div className="group-div">
          <div className="rectangle-div7" />
          <button className="group-button1" onClick={onGroupButtonClick}>
            <img className="vector-icon5" alt="" src="../vector5.svg" />
            <img className="vector-icon6" alt="" src="../vector6.svg" />
          </button>
        </div>
        <button className="group-button2" onClick={onGroupButton1Click}>
          <div className="rectangle-div3" />
          <img className="vector-icon7" alt="" src="../vector7.svg" />
        </button>
      </div>
    </div>
  );
};

export default Offers;
