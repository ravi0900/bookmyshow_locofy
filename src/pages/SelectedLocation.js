import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SelectedLocation.css";

const SelectedLocation = () => {
  const navigate = useNavigate();

  const onRectangleButton2Click = useCallback(() => {
    navigate("/movies");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/movies");
  }, [navigate]);

  const onGetStartedButtonClick = useCallback(() => {
    navigate("/movies");
  }, [navigate]);

  return (
    <form className="selected-location-form">
      <div className="rectangle-div450" />
      <div className="select-your-city">Select your city</div>
      <div className="rectangle-div451" />
      <div className="rectangle-div452" />
      <button className="rectangle-button20" />
      <div className="hyderabad-div">Hyderabad</div>
      <div className="chennai-div">Chennai</div>
      <div className="rectangle-div453" />
      <div className="rectangle-div454" />
      <div className="vishakapatnam-div">Vishakapatnam</div>
      <button className="rectangle-button21" />
      <button
        className="rectangle-button22"
        onClick={onRectangleButton2Click}
      />
      <button
        className="rectangle-button22"
        onClick={onRectangleButton3Click}
      />
      <div className="kolkata-div">Kolkata</div>
      <div className="jaipur-div">Jaipur</div>
      <div className="rectangle-div455" />
      <div className="delhi-ncr-div">Delhi-NCR</div>
      <div className="rectangle-div456" />
      <div className="rectangle-div457" />
      <div className="bangalore-div4">Bangalore</div>
      <img className="vector-icon71" alt="" src="../vector65.svg" />
      <div className="delhi-div">Delhi</div>
      <div className="mumbai-div">Mumbai</div>
      <img
        className="book-my-show-logo-icon"
        alt=""
        src="../book-my-show-logo@2x.png"
      />
      <button className="get-started-button" onClick={onGetStartedButtonClick}>
        Get Started
      </button>
    </form>
  );
};

export default SelectedLocation;
