import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./history";
import App from "./App";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
