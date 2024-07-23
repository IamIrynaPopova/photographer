import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import css from "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
const basename = process.env.NODE_ENV === "production" ? "/photographer" : "/";
root.render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
