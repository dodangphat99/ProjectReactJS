import "./App.css";
import "antd/dist/antd.css";
import React, { useSelector } from "react";
import { Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";

import i18n from "./locales/index";

import reducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import routes from "./pages/router";
import mySaga from "./sagas/index";
import { createBrowserHistory } from "history";
import { Skeleton } from "antd";

import { lightTheme, darkTheme } from "./themes";

const THEME = {
  light: lightTheme,
  dark: darkTheme,
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  const { theme } = useSelector((state) => state.commonReducer);

  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME[theme]}>
        <I18nextProvider i18n={i18n}>
          <Router history={createBrowserHistory()}>
            <React.Suspense fallback={<Skeleton active />}>
              {routeComponents}
            </React.Suspense>
          </Router>
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  );
}
