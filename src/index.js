import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloWorld from "./HelloWorld";

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(
  <React.StrictMode>
    <HelloWorld />
    {/* <App /> */}
  </React.StrictMode>
);
