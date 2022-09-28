import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import * as serviceWorker from "./serviceWorker";
import Home from "./container/home/Home";
import { createStore } from "redux";
import { Provider } from "react-redux";

// REDUX
// ini masih error di install react-redux

/// inisialisasi nilai dari reducer
const globalState = {
  totalOrder: 0,
};

// 2. reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === "PLUS_ORDER") {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }
  // jika kurang satu tidak bisa dikurang
  if (action.type === "MINUS_ORDER") {
    let totalOrder = 0;
    if (state.totalOrder > 0) {
      totalOrder = state.totalOrder - 1;
    }
    return {
      ...state,
      totalOrder: totalOrder,
    };
  }
  return state;
};

// 1. store
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
