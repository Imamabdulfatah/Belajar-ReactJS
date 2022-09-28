import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import * as serviceWorker from "./serviceWorker";
import Home from "./container/home/Home";
import { createStore } from "redux";
import { Provider } from "react-redux";

// redux
// ini masih error di install react-redux

const globalState = {
  totalOrder: 0,
};

// reducer
const rootReducer = (state = globalState, action) => {
  // switch (action.type) {
  //   case "ADD_AGE":
  //     return {
  //       ...state,
  //       age: state.age + 1,
  //     };
  //   case "CHANGE_VALUE":
  //     return {
  //       ...state,
  //       value: state.value + action.newValue,
  //     };
  //   default:
  //     return state;
  // }

  return state;
};

// store
const storeRedux = createStore(rootReducer);

// root utama/main root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <Home />
    </Provider>
  </React.StrictMode>
);
/// https://reactrouter.com/docs/en/v6/routers/history-router
///https://v5.reactrouter.com/web/guides/quick-start

/// teknologi diluar rect js state manajemen
// https://redux.js.org/
/// teknologi di rect js  yaitu context

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
