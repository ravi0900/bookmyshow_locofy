import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TheatresMovies.css";

const TheatresMovies = () => {
  const navigate = useNavigate();

  const onTHEWARRIORQUEENClick = useCallback(() => {
    navigate("/moviesthreatres");
  }, [navigate]);

  const onFROZEN2ButtonClick = useCallback(() => {
    navigate("/moviesthreatres");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/offers");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/movies");
  }, [navigate]);

  return (
    <div className="theatres-movies-div">
      <div className="group-div40">
        <div className="rectangle-div400" />
        <img className="vector-icon27" alt="" src="../vector21.svg" />
      </div>
      <div className="pvr-forum-mall-kormangala2">
        PVR, Forum Mall, Kormangala
      </div>
      <div className="group-div41">
        <div className="rectangle-div400" />
        <img className="vector-icon28" alt="" src="../vector22.svg" />
      </div>
      <div className="the-forum-mall-21-22-adugodi1">
        <p className="the-forum-mall1">{`The Forum Mall, 21-22, Adugodi Main Road, `}</p>
        <p className="kormangala-bengaluru-1">Kormangala, Bengaluru - 560095</p>
      </div>
      <div className="line-div1" />
      <div className="group-div42">
        <div className="group-div43">
          <div className="km-away-div3">2.1 km away</div>
        </div>
        <div className="group-div44">
          <div className="group-div45">
            <div className="rectangle-div400" />
            <img className="vector-icon29" alt="" src="../vector23.svg" />
          </div>
          <div className="directions-div3">Directions</div>
        </div>
      </div>
      <div className="rectangle-div403" />
      <div className="rectangle-div404" />
      <div className="location-div1">
        <div className="rectangle-div400" />
        <img className="vector-icon30" alt="" src="../vector24.svg" />
      </div>
      <div className="bangalore-div1">Bangalore</div>
      <div className="notification-div1">
        <div className="rectangle-div400" />
        <img className="vector-icon31" alt="" src="../vector25.svg" />
      </div>
      <div className="search-div1">
        <div className="rectangle-div400" />
        <img className="vector-icon32" alt="" src="../vector26.svg" />
      </div>
      <div className="today-div1">Today</div>
      <div className="tomorrow-div1">Tomorrow</div>
      <button
        className="the-warrior-queen-of-jhansi"
        onClick={onTHEWARRIORQUEENClick}
      >
        THE WARRIOR QUEEN OF JHANSI
      </button>
      <div className="english-2d">ENGLISH - 2D</div>
      <div className="pm-div11">4:00 PM</div>
      <div className="pm-div12">10:00 PM</div>
      <button className="frozen-2-button" onClick={onFROZEN2ButtonClick}>
        FROZEN 2
      </button>
      <div className="english-2d1">ENGLISH - 2D</div>
      <div className="pm-div13">3:00 PM</div>
      <div className="pm-div14">9:30 PM</div>
      <div className="ford-vs-ferrari">FORD VS FERRARI</div>
      <div className="english-2d2">ENGLISH - 2D</div>
      <div className="pm-div15">12:00 PM</div>
      <div className="pm-div16">7:00 PM</div>
      <div className="bala-div">BALA</div>
      <div className="hindi-2d">HINDI - 2D</div>
      <div className="am-div">11:00 AM</div>
      <div className="pm-div17">8:00 PM</div>
      <div className="helen-div">HELEN</div>
      <div className="nav-div1">
        <div className="rectangle-div408" />
        <img className="group-icon10" alt="" src="../group7.svg" />
        <button className="group-button5" onClick={onGroupButtonClick}>
          <img className="vector-icon33" alt="" src="../vector27.svg" />
          <img className="vector-icon34" alt="" src="../vector28.svg" />
          <img className="vector-icon35" alt="" src="../vector29.svg" />
          <img className="vector-icon36" alt="" src="../vector30.svg" />
        </button>
        <button className="group-button6" onClick={onGroupButton1Click}>
          <div className="rectangle-div409" />
          <img className="group-icon11" alt="" src="../group-3.svg" />
        </button>
        <div className="group-div46">
          <div className="rectangle-div400" />
          <img className="vector-icon37" alt="" src="../vector31.svg" />
        </div>
      </div>
    </div>
  );
};

export default TheatresMovies;
