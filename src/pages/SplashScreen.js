import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";

const SplashScreen = () => {
  const navigate = useNavigate();

  const onBookMyShowLogoButtonClick = useCallback(() => {
    navigate("/loginenternumber");
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
    <div className="splash-screen-div">
      <button
        className="book-my-show-logo-button"
        onClick={onBookMyShowLogoButtonClick}
        data-animate-on-scroll
      />
    </div>
  );
};

export default SplashScreen;
