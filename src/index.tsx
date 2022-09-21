import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Router } from "@reach/router";

import "./index.css";

import Payment from "./pages/Payment";
import Landing from "./pages/Landing";
import { ChooseDrink } from "./pages/ChooseDrink";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Landing path="/land" />
      <ChooseDrink path="/" />
      <Payment path="/payment" />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
