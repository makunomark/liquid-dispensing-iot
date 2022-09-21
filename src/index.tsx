import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Router } from "@reach/router";

import "./index.css";

import Payment from "./pages/Payment";
import Landing from "./pages/Landing";
import Layout from "./components/Layout";
import Pour from "./pages/Pour";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Layout>
      <Router>
        <Landing path="/" />
        <Payment path="/payment" />
        <Pour path="/pour" />
      </Router>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
