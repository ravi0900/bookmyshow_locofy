import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInEnterNumber.css";

const LogInEnterNumber = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/loginverify");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="log-in-enter-number-div">
      <img
        className="book-my-show-logo-icon2"
        alt=""
        src="../bookmyshowlogo@3x.png"
      />
      <input
        className="rectangle-input"
        type="text"
        minLength={10}
        data-animate-on-scroll
      />
      <input className="rectangle-input1" type="text" data-animate-on-scroll />
      <div className="please-enter-your-mobile-numbe">
        <p className="please-enter-your">{`Please enter your mobile number or `}</p>
        <p className="email-address-for">email address for verification</p>
      </div>
      <div className="enter-mobile-number">Enter mobile number</div>
      <div className="enter-email-address">Enter email address</div>
      <div className="or-div">or</div>
      <button className="rectangle-button24" onClick={onRectangleButtonClick} />
      <b className="send-verification-code">Send Verification Code</b>
    </div>
  );
};

export default LogInEnterNumber;
