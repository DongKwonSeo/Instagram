import React from "react";
import ReactDOM from "react-dom";
import "./scss/style.scss";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
