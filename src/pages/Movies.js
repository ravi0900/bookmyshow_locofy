import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Movies.css";

const Movies = () => {
  const navigate = useNavigate();

  const onPagalpantiButtonClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onRectangleButton4Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/offers");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/theatres");
  }, [navigate]);

  return (
    <div className="movies-div">
      <div className="rectangle-div442" />
      <button className="rectangle-button15" />
      <button className="pagalpanti-button" onClick={onPagalpantiButtonClick}>
        <img className="image-6-icon" alt="" src="../image-6@2x.png" />
      </button>
      <img className="frozen-icon" alt="" src="../frozen@2x.png" />
      <img className="abominable-icon" alt="" src="../abominable@2x.png" />
      <img className="helen-icon" alt="" src="../helen@2x.png" />
      <img className="bala-icon" alt="" src="../bala@2x.png" />
      <button
        className="rectangle-button16"
        onClick={onRectangleButton1Click}
      />
      <button
        className="rectangle-button17"
        onClick={onRectangleButton2Click}
      />
      <button
        className="rectangle-button18"
        onClick={onRectangleButton3Click}
      />
      <button
        className="rectangle-button19"
        onClick={onRectangleButton4Click}
      />
      <div className="now-showing-div">Now Showing</div>
      <div className="coming-soon-div">Coming Soon</div>
      <div className="location-div3">
        <div className="rectangle-div443" />
        <img className="vector-icon63" alt="" src="../vector24.svg" />
      </div>
      <div className="bangalore-div3">Bangalore</div>
      <div className="notification-div3">
        <div className="rectangle-div443" />
        <img className="vector-icon64" alt="" src="../vector25.svg" />
      </div>
      <div className="search-div3">
        <div className="rectangle-div443" />
        <img className="vector-icon65" alt="" src="../vector34.svg" />
      </div>
      <img className="group-icon14" alt="" src="../group9.svg" />
      <img className="group-icon15" alt="" src="../group10.svg" />
      <img className="group-icon16" alt="" src="../group11.svg" />
      <div className="helen-div1">Helen</div>
      <div className="div17">91%</div>
      <div className="frozen-2-div7">Frozen 2</div>
      <div className="div18">85%</div>
      <div className="bala-div1">Bala</div>
      <div className="div19">80%</div>
      <div className="abominable-div">Abominable</div>
      <div className="div20">87%</div>
      <img className="group-icon17" alt="" src="../group12.svg" />
      <div className="rectangle-div446" />
      <div className="nav-div3">
        <div className="rectangle-div447" />
        <img className="group-icon18" alt="" src="../group7.svg" />
        <button className="group-button10" onClick={onGroupButtonClick}>
          <img className="vector-icon66" alt="" src="../vector51.svg" />
          <img className="vector-icon67" alt="" src="../vector52.svg" />
          <img className="vector-icon68" alt="" src="../vector53.svg" />
          <img className="vector-icon69" alt="" src="../vector54.svg" />
        </button>
        <button className="group-button11">
          <div className="rectangle-div448" />
          <img className="group-icon19" alt="" src="../group-32.svg" />
        </button>
        <button className="group-button12" onClick={onGroupButton2Click}>
          <div className="rectangle-div448" />
          <img className="vector-icon70" alt="" src="../vector64.svg" />
        </button>
      </div>
    </div>
  );
};

export default Movies;
