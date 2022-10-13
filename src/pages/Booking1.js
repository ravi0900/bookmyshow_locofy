import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking1.css";

const Booking1 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/theatresmovies");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/booking-2");
  }, [navigate]);

  return (
    <div className="booking-1-div">
      <div className="rectangle-div310" />
      <button className="rectangle-button9" onClick={onRectangleButtonClick} />
      <button className="group-button3" onClick={onGroupButtonClick}>
        <div className="rectangle-div311" />
        <img className="vector-icon25" alt="" src="../vector1.svg" />
      </button>
      <div className="frozen-2-div5">Frozen 2</div>
      <div className="friday-29-november-400-pm3">{`Friday, 29 November   4:00 PM `}</div>
      <div className="rectangle-div312" />
      <div className="rectangle-div313" />
      <img className="vector-icon26" alt="" src="../vector-13.svg" />
      <div className="all-eyes-this-way3">All eyes this way!</div>
      <button className="group-button4" onClick={onGroupButton1Click}>
        <div className="rectangle-div314" />
        <div className="rectangle-div315" />
        <div className="rectangle-div316" />
        <div className="rectangle-div317" />
        <div className="rectangle-div318" />
        <div className="rectangle-div319" />
        <div className="rectangle-div320" />
        <div className="rectangle-div321" />
        <div className="rectangle-div322" />
        <div className="rectangle-div323" />
        <div className="rectangle-div324" />
        <div className="rectangle-div325" />
        <div className="rectangle-div326" />
        <div className="rectangle-div327" />
        <div className="rectangle-div328" />
        <div className="rectangle-div329" />
        <div className="rectangle-div330" />
        <div className="rectangle-div331" />
        <div className="rectangle-div332" />
        <div className="rectangle-div333" />
        <div className="rectangle-div334" />
        <div className="rectangle-div335" />
        <div className="rectangle-div336" />
        <div className="rectangle-div337" />
        <div className="group-div36">
          <div className="rectangle-div338" />
          <div className="rectangle-div339" />
          <div className="rectangle-div340" />
          <div className="rectangle-div341" />
          <div className="rectangle-div342" />
          <div className="rectangle-div343" />
          <div className="rectangle-div344" />
          <div className="rectangle-div345" />
          <div className="rectangle-div346" />
          <div className="rectangle-div347" />
          <div className="rectangle-div348" />
          <div className="rectangle-div349" />
          <div className="rectangle-div350" />
          <div className="rectangle-div351" />
          <div className="rectangle-div352" />
          <div className="rectangle-div353" />
          <div className="rectangle-div354" />
          <div className="rectangle-div355" />
          <div className="rectangle-div356" />
          <div className="rectangle-div357" />
          <div className="rectangle-div358" />
          <div className="rectangle-div359" />
          <div className="rectangle-div360" />
          <div className="rectangle-div361" />
          <div className="rectangle-div362" />
          <div className="rectangle-div363" />
          <div className="rectangle-div364" />
          <div className="rectangle-div365" />
          <div className="rectangle-div366" />
          <div className="rectangle-div367" />
        </div>
        <div className="group-div37">
          <div className="rectangle-div338" />
          <div className="rectangle-div339" />
          <div className="rectangle-div340" />
          <div className="rectangle-div341" />
          <div className="rectangle-div342" />
          <div className="rectangle-div373" />
          <div className="rectangle-div344" />
          <div className="rectangle-div345" />
          <div className="rectangle-div346" />
          <div className="rectangle-div347" />
          <div className="rectangle-div348" />
          <div className="rectangle-div349" />
          <div className="rectangle-div350" />
          <div className="rectangle-div351" />
          <div className="rectangle-div352" />
          <div className="rectangle-div353" />
          <div className="rectangle-div354" />
          <div className="rectangle-div355" />
          <div className="rectangle-div386" />
          <div className="rectangle-div387" />
          <div className="rectangle-div358" />
          <div className="rectangle-div389" />
          <div className="rectangle-div390" />
          <div className="rectangle-div361" />
          <div className="rectangle-div362" />
          <div className="rectangle-div363" />
          <div className="rectangle-div394" />
          <div className="rectangle-div395" />
          <div className="rectangle-div396" />
          <div className="rectangle-div397" />
        </div>
        <div className="balcony-rs-150003">Balcony - Rs. 150.00</div>
        <div className="normal-rs-200003">Normal - Rs. 200.00</div>
        <div className="executive-rs-200001">Executive - Rs. 200.00</div>
      </button>
      <div className="group-div38">
        <div className="rectangle-div398" />
        <div className="selected-div3">Selected</div>
      </div>
      <div className="group-div39">
        <div className="rectangle-div399" />
        <div className="available-div3">Available</div>
      </div>
      <div className="unavailable-div3">Unavailable</div>
    </div>
  );
};

export default Booking1;
