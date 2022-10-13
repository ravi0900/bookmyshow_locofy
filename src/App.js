import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import TicketsBooked from "./pages/TicketsBooked";
import Offers from "./pages/Offers";
import MoviesThreatres from "./pages/MoviesThreatres";
import Payment2 from "./pages/Payment2";
import Payment1 from "./pages/Payment1";
import BookingConfirmation from "./pages/BookingConfirmation";
import Booking4 from "./pages/Booking4";
import Booking3 from "./pages/Booking3";
import Booking2 from "./pages/Booking2";
import Booking1 from "./pages/Booking1";
import TheatresMovies from "./pages/TheatresMovies";
import Theatres from "./pages/Theatres";
import About from "./pages/About";
import Movies from "./pages/Movies";
import SelectedLocation from "./pages/SelectedLocation";
import VerificationSuccessful from "./pages/VerificationSuccessful";
import LogInVerify from "./pages/LogInVerify";
import LogInEnterNumber from "./pages/LogInEnterNumber";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/tickets-booked":
        title = "";
        metaDescription = "";
        break;
      case "/offers":
        title = "";
        metaDescription = "";
        break;
      case "/moviesthreatres":
        title = "";
        metaDescription = "";
        break;
      case "/payment-2":
        title = "";
        metaDescription = "";
        break;
      case "/payment-1":
        title = "";
        metaDescription = "";
        break;
      case "/booking-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/booking-4":
        title = "";
        metaDescription = "";
        break;
      case "/booking-3":
        title = "";
        metaDescription = "";
        break;
      case "/booking-2":
        title = "";
        metaDescription = "";
        break;
      case "/booking-1":
        title = "";
        metaDescription = "";
        break;
      case "/theatresmovies":
        title = "";
        metaDescription = "";
        break;
      case "/theatres":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/movies":
        title = "";
        metaDescription = "";
        break;
      case "/selected-location":
        title = "";
        metaDescription = "";
        break;
      case "/verification-successful":
        title = "";
        metaDescription = "";
        break;
      case "/loginverify":
        title = "";
        metaDescription = "";
        break;
      case "/loginenternumber":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />

      <Route path="/tickets-booked" element={<TicketsBooked />} />

      <Route path="/offers" element={<Offers />} />

      <Route path="/moviesthreatres" element={<MoviesThreatres />} />

      <Route path="/payment-2" element={<Payment2 />} />

      <Route path="/payment-1" element={<Payment1 />} />

      <Route path="/booking-confirmation" element={<BookingConfirmation />} />

      <Route path="/booking-4" element={<Booking4 />} />

      <Route path="/booking-3" element={<Booking3 />} />

      <Route path="/booking-2" element={<Booking2 />} />

      <Route path="/booking-1" element={<Booking1 />} />

      <Route path="/theatresmovies" element={<TheatresMovies />} />

      <Route path="/theatres" element={<Theatres />} />

      <Route path="/about" element={<About />} />

      <Route path="/movies" element={<Movies />} />

      <Route path="/selected-location" element={<SelectedLocation />} />

      <Route
        path="/verification-successful"
        element={<VerificationSuccessful />}
      />

      <Route path="/loginverify" element={<LogInVerify />} />

      <Route path="/loginenternumber" element={<LogInEnterNumber />} />
    </Routes>
  );
}
export default App;
