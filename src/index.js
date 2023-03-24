// IMPORT THE REACT
import React from "react";
// IMPPRT THE REACTDOM
import ReactDOM from "react-dom/client";
// IMPORT THE STYLES
import "./styles.css";
// IMPORT THE APP COMPONENT
import App from "./Components/App";
// IMPORT BROWSER ROUTER
import { BrowserRouter as Router } from "react-router-dom";
// IMPORT THE STORE
import store from "./Redux/store";
// IMPORT THE PROVIDER
import { Provider } from "react-redux";

// INITIALIZING THE ROOT
const root = ReactDOM.createRoot(document.getElementById("root"));
// CALLING TH ERENDER METHOR ON ROOT
root.render(
  <React.StrictMode>
    {/* WRAPPING THE APP COMPONENT WITH ROUTER FOR ROUTING*/}
    <Router>
      {/* WRAPPING THE WHOLE APP WITH THE PROVIDER */}
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
