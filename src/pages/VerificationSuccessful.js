import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./VerificationSuccessful.css";

const VerificationSuccessful = () => {
  const navigate = useNavigate();

  const onVectorButtonClick = useCallback(() => {
    navigate("/selected-location");
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
    <div className="verification-successful-div">
      <div className="verification-successful-div1">
        Verification Successful
      </div>
      <button
        className="vector-button1"
        onClick={onVectorButtonClick}
        data-animate-on-scroll
      >
        <img className="vector-icon72" alt="" src="../vector66.svg" />
        <img className="ellipse-icon16" alt="" src="../ellipse-11.svg" />
        <img className="ellipse-icon17" alt="" src="../ellipse-41.svg" />
        <img className="ellipse-icon18" alt="" src="../ellipse-51.svg" />
        <img className="ellipse-icon19" alt="" src="../ellipse-61.svg" />
        <img className="ellipse-icon20" alt="" src="../ellipse-21.svg" />
        <img className="ellipse-icon21" alt="" src="../ellipse-31.svg" />
      </button>
    </div>
  );
};

export default VerificationSuccessful;
