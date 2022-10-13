import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MoviesThreatres.css";

const MoviesThreatres = () => {
  const navigate = useNavigate();

  const onPVRForumMallClick = useCallback(() => {
    navigate("/booking-1");
  }, [navigate]);

  return (
    <div className="movies-threatres-div">
      <div className="line-div" />
      <div className="rectangle-div9" />
      <div className="today-div">Today</div>
      <div className="tomorrow-div">Tomorrow</div>
      <button
        className="pvr-forum-mall-kormangala"
        onClick={onPVRForumMallClick}
      >
        PVR, Forum Mall, Kormangala
      </button>
      <div className="the-forum-mall-21-22-adugodi">
        <p className="the-forum-mall">{`The Forum Mall, 21-22, Adugodi Main Road, `}</p>
        <p className="kormangala-bengaluru-">Kormangala, Bengaluru - 560095</p>
      </div>
      <div className="pm-div">3:00 PM</div>
      <div className="pm-div1">9:30 PM</div>
      <div className="adventure-animation-comedy">
        Adventure, Animation, Comedy
      </div>
      <div className="frozen-2-div">Frozen 2</div>
      <img className="mask-group-icon" alt="" src="../mask-group@2x.png" />
      <div className="group-div1">
        <div className="rectangle-div10" />
        <img className="vector-icon8" alt="" src="../vector8.svg" />
      </div>
      <div className="group-div2">
        <div className="km-away-div">2.1 km away</div>
        <div className="group-div3">
          <div className="group-div4">
            <div className="rectangle-div10" />
            <img className="vector-icon9" alt="" src="../vector9.svg" />
          </div>
          <div className="directions-div">Directions</div>
        </div>
      </div>
      <div className="lakshmi-theatre-div">Lakshmi Theatre</div>
      <div className="no-1041-balaji-layout-tava">
        <p className="the-forum-mall">{`No. 104/1, Balaji Layout, Tavarekere Road, `}</p>
        <p className="kormangala-bengaluru-">Bangalore - 560081</p>
      </div>
      <div className="pm-div2">12:00 PM</div>
      <div className="pm-div3">4:00 PM</div>
      <div className="pm-div4">9:45 PM</div>
      <div className="group-div5">
        <div className="rectangle-div10" />
        <img className="vector-icon8" alt="" src="../vector8.svg" />
      </div>
      <div className="group-div6">
        <div className="km-away-div1">8 km away</div>
        <div className="group-div3">
          <div className="group-div4">
            <div className="rectangle-div10" />
            <img className="vector-icon9" alt="" src="../vector9.svg" />
          </div>
          <div className="directions-div">Directions</div>
        </div>
      </div>
      <div className="babu-theatre-div">Babu Theatre</div>
      <div className="dommasandra-sarjapur-road-ba">
        <p className="the-forum-mall">{`Dommasandra, Sarjapur Road, `}</p>
        <p className="kormangala-bengaluru-">Bangalore - 560034</p>
      </div>
      <div className="pm-div5">2:00 PM</div>
      <div className="pm-div6">3:30 PM</div>
      <div className="pm-div7">5:00 PM</div>
      <div className="pm-div8">9:00 PM</div>
      <div className="pm-div9">10:30 PM</div>
      <div className="group-div9">
        <div className="rectangle-div10" />
        <img className="vector-icon8" alt="" src="../vector8.svg" />
      </div>
      <div className="group-div10">
        <div className="km-away-div1">5 km away</div>
        <div className="group-div3">
          <div className="group-div4">
            <div className="rectangle-div10" />
            <img className="vector-icon9" alt="" src="../vector9.svg" />
          </div>
          <div className="directions-div">Directions</div>
        </div>
      </div>
    </div>
  );
};

export default MoviesThreatres;
