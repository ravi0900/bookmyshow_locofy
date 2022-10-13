import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/booking-1");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/movies");
  }, [navigate]);

  const onBookTicketsButtonClick = useCallback(() => {
    navigate("/booking-1");
  }, [navigate]);

  return (
    <div className="about-div">
      <img className="banner-icon" alt="" src="../banner@2x.png" />
      <div className="rectangle-div439" />
      <button className="rectangle-button14" onClick={onRectangleButtonClick} />
      <div className="rectangle-div440" />
      <div className="adventure-animation-comedy1">
        Adventure, Animation, Comedy
      </div>
      <div className="frozen-2-div6">Frozen 2</div>
      <div className="group-div76">
        <div className="three-years-after-the-events-o">
          <p className="three-years-after">{`Three years after the events of Frozen, Elsa begins to `}</p>
          <p className="three-years-after">{`hear strange voices calling to her from the forest and all `}</p>
          <p className="three-years-after">
            of a sudden Arendelle finds itself in danger. Elsa, Anna,
          </p>
          <p className="three-years-after">
            Kristoff, Olaf and Sven must go beyond Arendelle to find
          </p>
          <p className="the-origin-of">
            {" "}
            the origin of Elsa`s powers and save their kingdom.
          </p>
        </div>
        <div className="synopsis-div">SYNOPSIS</div>
      </div>
      <div className="censor-rating-div">Censor Rating</div>
      <div className="release-date-div">Release Date</div>
      <div className="duration-div">Duration</div>
      <div className="u-div">U</div>
      <div className="nov-22-2019">Nov 22, 2019</div>
      <div className="h-43m-div">1h 43m</div>
      <div className="cast-crew">{`CAST & CREW`}</div>
      <div className="director-div">DIRECTOR</div>
      <div className="available-in-div">AVAILABLE IN</div>
      <div className="english-div">ENGLISH</div>
      <div className="d-div">3D</div>
      <div className="imax-div">IMAX</div>
      <img className="ellipse-icon15" alt="" src="../ellipse-9.svg" />
      <div className="kristen-bell-evan-rachel-wood">
        Kristen Bell, Evan Rachel Wood, Jonathan Groff
      </div>
      <div className="chris-buck-div">Chris Buck</div>
      <button className="group-button9" onClick={onGroupButtonClick}>
        <div className="rectangle-div441" />
        <img className="vector-icon62" alt="" src="../vector56.svg" />
      </button>
      <button
        className="book-tickets-button"
        onClick={onBookTicketsButtonClick}
      >
        Book Tickets
      </button>
    </div>
  );
};

export default About;
