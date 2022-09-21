import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Layout from "./components/Layout";
import "./index.css";
import ChooseDrink from "./pages/ChooseDrink";
import Enjoy from "./pages/Enjoy";
import Landing from "./pages/Landing";
import Pour from "./pages/Pour";
import QRCode from "./pages/QRCode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/qr",
    element: <QRCode />,
  },
  {
    path: "/enjoy",
    element: <Enjoy />,
  },
  {
    path: "/pour",
    element: <Pour />,
  },
  {
    path: "/choose-drink",
    element: <ChooseDrink />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
