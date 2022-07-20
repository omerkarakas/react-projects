import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
//import { store } from './app/store';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { createStore } from "redux";

// global state

// action : a function that returns an object
const increment = () => {
  console.log("inc");
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  console.log("dec");
  return {
    type: "DECREMENT",
  };
};

// reducer, a function that returns an object
const counter = (state = 0, action) => {
  console.log("counter");

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

// display it in the console
store.subscribe(() => {
  console.log("subs");
  console.log(store.getState());
});

// dispatch
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
