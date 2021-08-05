import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import mySaga from "./sagas/index";

import { Provider } from "react-redux";
import reducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reportWebVitals from "./reportWebVitals";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
