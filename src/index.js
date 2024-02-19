
import "bootstrap/dist/css/bootstrap.min.css";

import reactDom from "react-dom/client";

import { App } from "./app";

import "./main.scss";

let root = reactDom.createRoot(document.getElementById("root"));
root.render(
  <div>
      <App />
  </div>
);
