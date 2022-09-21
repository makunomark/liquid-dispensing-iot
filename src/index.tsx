import { Router } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import Landing from "./pages/Landing";
import Layout from "./components/Layout";
import Pour from "./pages/Pour";
import Enjoy from "./pages/Enjoy";
import ChooseDrink from "./pages/ChooseDrink";
import QRCode from "./pages/QRCode";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Layout>
      <Router>
        <Landing path="/" />
        <Pour path="pour" />
        <Enjoy path="enjoy" />
        <ChooseDrink path="choose-drink" />
        <QRCode path="/qr" />
      </Router>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
