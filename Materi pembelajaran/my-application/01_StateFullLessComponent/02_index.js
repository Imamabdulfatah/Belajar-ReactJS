import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloComponent from "./container/HelloComponent";
import StateFullComponent from "./container/StateFullComponent";

/// my code
/// bentuk function
// function HelloComponent () {
//   return <p>hello functonal component</p>;
// }

// class StateFullComponent extends React.Component {
//   render() {
//     return <p>statefull Component</p>;
//   }
// }

// ini data dari app.js
// ini akan merender ke root index.html public

// https://reactjs.org/docs/components-and-props.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelloComponent />
    <StateFullComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
