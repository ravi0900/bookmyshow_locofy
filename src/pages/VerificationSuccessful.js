import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./VerificationSuccessful.css";

const VerificationSuccessful = () => {
  const navigate = useNavigate();

  const onVectorButtonClick = useCallback(() => {
    navigate("/selected-location");
  }, [navigate]);

  return (
    <div className="verification-successful-div">
      <div className="verification-successful-div1">
        Verification Successful
      </div>
      <button className="vector-button" onClick={onVectorButtonClick}>
        <img className="vector-icon72" alt="" src="../vector66.svg" />
        <img className="ellipse-icon10" alt="" src="../ellipse-1.svg" />
        <img className="ellipse-icon11" alt="" src="../ellipse-4.svg" />
        <img className="ellipse-icon12" alt="" src="../ellipse-5.svg" />
        <img className="ellipse-icon13" alt="" src="../ellipse-6.svg" />
        <img className="ellipse-icon14" alt="" src="../ellipse-2.svg" />
        <img className="ellipse-icon15" alt="" src="../ellipse-3.svg" />
      </button>
    </div>
  );
};

export default VerificationSuccessful;
