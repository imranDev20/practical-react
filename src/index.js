import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloWorld from "./HelloWorld";
import ChangingState from "./ChangingStates";
import List from "./List";

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(
  <>
    <List />
    {/* <ChangingState /> */}
    {/* <HelloWorld /> */}
    {/* <App /> */}
  </>
);
