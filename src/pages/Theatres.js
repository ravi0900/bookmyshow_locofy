import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Theatres.css";

const Theatres = () => {
  const navigate = useNavigate();

  const onLocationContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='vectorIcon1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBangaloreTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='rectangleRectangle']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSearchContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='vectorIcon']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/moviesthreatres");
  }, [navigate]);

  const onViewShowsButtonClick = useCallback(() => {
    navigate("/moviesthreatres");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/theatresmovies");
  }, [navigate]);

  const onViewShowsButton1Click = useCallback(() => {
    navigate("/moviesthreatres");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/theatresmovies");
  }, [navigate]);

  const onViewShowsButton2Click = useCallback(() => {
    navigate("/moviesthreatres");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/theatresmovies");
  }, [navigate]);

  const onViewShowsButton3Click = useCallback(() => {
    navigate("/moviesthreatres");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/offers");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/movies");
  }, [navigate]);

  return (
    <div className="theatres-div">
      <div className="rectangle-div411" />
      <div className="rectangle-div412" data-scroll-to="rectangleRectangle" />
      <div className="location-div2" onClick={onLocationContainerClick}>
        <div className="rectangle-div413" />
        <img
          className="vector-icon38"
          alt=""
          src="../vector24.svg"
          data-scroll-to="vectorIcon1"
        />
      </div>
      <div className="bangalore-div2" onClick={onBangaloreTextClick}>
        Bangalore
      </div>
      <div className="notification-div2">
        <div className="rectangle-div413" />
        <img className="vector-icon39" alt="" src="../vector25.svg" />
      </div>
      <div className="search-div2" onClick={onSearchContainerClick}>
        <div className="rectangle-div413" />
        <img
          className="vector-icon40"
          alt=""
          src="../vector34.svg"
          data-scroll-to="vectorIcon"
        />
      </div>
      <div className="group-div47">
        <div className="rectangle-div416" />
        <div className="group-div48">
          <div className="rectangle-div413" />
          <img className="vector-icon41" alt="" src="../vector35.svg" />
        </div>
        <div className="pvr-forum-mall-kormangala3">
          PVR, Forum Mall, Kormangala
        </div>
        <div className="group-div49">
          <div className="rectangle-div413" />
          <img className="vector-icon42" alt="" src="../vector36.svg" />
        </div>
        <div className="the-forum-mall-21-22-adugodi2">
          <p className="st-main-8th">{`The Forum Mall, 21-22, Adugodi Main Road, `}</p>
          <p className="st-stage-bangalore">Kormangala, Bengaluru - 560095</p>
        </div>
        <div className="line-div2" />
        <div className="group-div50">
          <div className="group-div51">
            <div className="rectangle-div413" />
            <img className="vector-icon41" alt="" src="../vector37.svg" />
          </div>
          <div className="km-away-div4">2.1 km away</div>
        </div>
        <div className="group-div52">
          <div className="group-div53">
            <div className="rectangle-div413" />
            <img className="vector-icon44" alt="" src="../vector38.svg" />
          </div>
          <div className="directions-div4">Directions</div>
        </div>
        <button
          className="rectangle-button10"
          onClick={onRectangleButtonClick}
        />
        <button className="view-shows-button" onClick={onViewShowsButtonClick}>
          View Shows
        </button>
      </div>
      <div className="group-div54">
        <div className="rectangle-div416" />
        <div className="group-div48">
          <div className="rectangle-div413" />
          <img className="vector-icon41" alt="" src="../vector35.svg" />
        </div>
        <div className="babu-theatre-div1">Babu Theatre</div>
        <div className="group-div49">
          <div className="rectangle-div413" />
          <img className="vector-icon42" alt="" src="../vector36.svg" />
        </div>
        <div className="dommasandra-sarjapur-road-ba1">
          <p className="st-main-8th">{`Dommasandra, Sarjapur Road, `}</p>
          <p className="st-stage-bangalore">Bangalore - 560034</p>
        </div>
        <div className="line-div2" />
        <div className="group-div57">
          <div className="group-div58">
            <div className="rectangle-div413" />
            <img className="vector-icon41" alt="" src="../vector37.svg" />
          </div>
          <div className="km-away-div5">5 km away</div>
        </div>
        <div className="group-div52">
          <div className="group-div53">
            <div className="rectangle-div413" />
            <img className="vector-icon44" alt="" src="../vector38.svg" />
          </div>
          <div className="directions-div4">Directions</div>
        </div>
        <button
          className="rectangle-button10"
          onClick={onRectangleButton1Click}
        />
        <button className="view-shows-button" onClick={onViewShowsButton1Click}>
          View Shows
        </button>
      </div>
      <div className="group-div61">
        <div className="rectangle-div416" />
        <div className="group-div48">
          <div className="rectangle-div413" />
          <img className="vector-icon41" alt="" src="../vector35.svg" />
        </div>
        <div className="lakshmi-theatre-div1">Lakshmi Theatre</div>
        <div className="group-div49">
          <div className="rectangle-div413" />
          <img className="vector-icon42" alt="" src="../vector22.svg" />
        </div>
        <div className="no-1041-balaji-layout-tava1">
          <p className="st-main-8th">{`No. 104/1, Balaji Layout, Tavarekere Road, `}</p>
          <p className="st-stage-bangalore">Bangalore - 560081</p>
        </div>
        <div className="line-div2" />
        <div className="group-div57">
          <div className="group-div58">
            <div className="rectangle-div413" />
            <img className="vector-icon41" alt="" src="../vector37.svg" />
          </div>
          <div className="km-away-div5">8 km away</div>
        </div>
        <div className="group-div52">
          <div className="group-div53">
            <div className="rectangle-div413" />
            <img className="vector-icon44" alt="" src="../vector38.svg" />
          </div>
          <div className="directions-div4">Directions</div>
        </div>
        <button
          className="rectangle-button10"
          onClick={onRectangleButton2Click}
        />
        <button className="view-shows-button" onClick={onViewShowsButton2Click}>
          View Shows
        </button>
      </div>
      <div className="group-div68">
        <div className="rectangle-div416" />
        <div className="group-div48">
          <div className="rectangle-div413" />
          <img className="vector-icon41" alt="" src="../vector35.svg" />
        </div>
        <div className="srinivasa-theatre-div">Srinivasa Theatre</div>
        <div className="group-div49">
          <div className="rectangle-div413" />
          <img className="vector-icon42" alt="" src="../vector22.svg" />
        </div>
        <div className="st-main-8th-cross-s-g-palya">
          <p className="st-main-8th">{`1st Main, 8th Cross, S G Palya, Btm Layout `}</p>
          <p className="st-stage-bangalore">1st Stage, Bangalore - 560029</p>
        </div>
        <div className="line-div2" />
        <div className="group-div50">
          <div className="group-div51">
            <div className="rectangle-div413" />
            <img className="vector-icon41" alt="" src="../vector37.svg" />
          </div>
          <div className="km-away-div4">2.1 km away</div>
        </div>
        <div className="group-div52">
          <div className="group-div53">
            <div className="rectangle-div413" />
            <img className="vector-icon44" alt="" src="../vector38.svg" />
          </div>
          <div className="directions-div4">Directions</div>
        </div>
        <button
          className="rectangle-button10"
          onClick={onRectangleButton3Click}
        />
        <button className="view-shows-button" onClick={onViewShowsButton3Click}>
          View Shows
        </button>
      </div>
      <div className="nav-div2">
        <div className="rectangle-div436" />
        <img className="group-icon12" alt="" src="../group7.svg" />
        <button className="group-button7" onClick={onGroupButtonClick}>
          <img className="vector-icon57" alt="" src="../vector51.svg" />
          <img className="vector-icon58" alt="" src="../vector52.svg" />
          <img className="vector-icon59" alt="" src="../vector53.svg" />
          <img className="vector-icon60" alt="" src="../vector54.svg" />
        </button>
        <button className="group-button8" onClick={onGroupButton1Click}>
          <div className="rectangle-div437" />
          <img className="group-icon13" alt="" src="../group-31.svg" />
        </button>
        <div className="group-div75">
          <div className="rectangle-div413" />
          <img className="vector-icon61" alt="" src="../vector55.svg" />
        </div>
      </div>
    </div>
  );
};

export default Theatres;
