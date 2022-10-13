import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInVerify.css";

const LogInVerify = () => {
  const navigate = useNavigate();

  const onVerifyButtonClick = useCallback(() => {
    navigate("/verification-successful");
  }, [navigate]);

  return (
    <div className="log-in-verify-div">
      <img
        className="book-my-show-logo-icon1"
        alt=""
        src="../bookmyshowlogo@3x.png"
      />
      <input className="group-input" type="text" autoFocus />
      <div className="please-enter-verification-code">
        Please enter verification code
      </div>
      <div className="resend-verification-code-in-45">
        <span className="resend-span">Resend</span>
        <span> verification code in 45 seconds</span>
      </div>
      <button className="verify-button" onClick={onVerifyButtonClick}>
        <div className="rectangle-div458" />
        <b className="verify-b">Verify</b>
      </button>
    </div>
  );
};

export default LogInVerify;
