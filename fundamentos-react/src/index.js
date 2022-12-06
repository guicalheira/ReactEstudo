import ReactDom from "react-dom";
import "./index.css";
import App from "./App.jsx";

const el = document.getElementById("root");
ReactDom.render(
  <div>
    <App></App>
  </div>,
  el
);
