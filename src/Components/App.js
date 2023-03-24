
// IMPORT THE MAIN STYLES
import "../main.css";
// IMPORT THE REACT FROM REACT PACKAGE
import React from "react";
// IMPORT THE GOME COMPONENT
import Home from "../pages/Home";

// IMPORT ROUTES AND ROUTE FROM REACT ROUTER DOM PACKAGE
import { Route, Routes } from "react-router-dom";
// IMPORT THE CREATE HABBIT FUNCTIONAL COMPONENT
import CreateHabbit from "../pages/CreateHabbit";

// IMPORT THE HABBIT CONTAINER FUNCTIONAL COMPONENT
import HabbitContainer from "../pages/HabbitsContainer";
// IMPORT THE NAV COMPONENT
import Navbar from "./Navbar";

// IMPORT THE DETAIL PAGE COMPONENT
import DetailView from "../pages/DetailView";

// DEFINGIN THE APP FUNCTIONAL COMPONENT
const App = () => {
  return (
    <>
    {/* USING THE NAV BAR COMPONENT*/}
    <Navbar />
    {/* DEFINIGN THE ROUTES FOR THE APPLICATION*/}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/create" exact element={<CreateHabbit />} />
        <Route path="/habbits" exact element={<HabbitContainer />} />
        <Route path="/details" exact element={<DetailView />} />
      </Routes>
    </>
  );
};

// MAKING THE DEFAULT EXPORT
export default App;
