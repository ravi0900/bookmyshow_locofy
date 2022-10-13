import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";

const SplashScreen = () => {
  const navigate = useNavigate();

  const onBookMyShowLogoButtonClick = useCallback(() => {
    navigate("/loginenternumber");
  }, [navigate]);

  return (
    <div className="splash-screen-div">
      <button
        className="book-my-show-logo-button"
        onClick={onBookMyShowLogoButtonClick}
      />
    </div>
  );
};

export default SplashScreen;
