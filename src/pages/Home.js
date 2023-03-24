import HeroSection from "./Hero";
// IMPORTING THE TOAS AND TOAST CONTAINER FOR SENDING THE ALERT MESSAGE
import { ToastContainer } from "react-toastify";
// IMPORTING THE CSS FOR THE TOAST NOTIFICATION
import "react-toastify/dist/ReactToastify.css";

// DEFING THE HOME FUNCTIONAL COMPONENT
const Home = () => {
  // DEFING THE UI FOR THE HOME COMPONENT
  return (
    <div className="App">
    {/* USING THE TOAST CONTAINER COMPONENT*/}
    <ToastContainer />
    {/* USING THE HERO SECTION COMPONENT*/}
      <HeroSection />
    </div>
  );
};

// MAKING THE EXPORT DEFAULT
export default Home;
