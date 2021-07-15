import "./App.css";
import 'antd/dist/antd.css';
import React from "react";
import { Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import routes from "./pages/router";
import mySaga from "./sagas/index";
import { createBrowserHistory } from "history";
import { Skeleton } from 'antd';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <React.Suspense fallback={<Skeleton active/>}>
          {routeComponents}
        </React.Suspense>
      </Router>
    </Provider>
  );
}
