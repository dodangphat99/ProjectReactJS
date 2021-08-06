import { useSelector } from "react-redux";
import { Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";

import { createBrowserHistory } from "history";
import i18n from "./locales/index";

import DefaultLayout from "./components/DefaultLayout";
import FullLayout from "./components/FullLayout";
import Layout from "./components/AdminLayout/layout/Layout";

import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import Dashboard from "./pages/adminPage/Dashboard";
import Customers from "./pages/adminPage/Customers";
import Products from "./pages/adminPage/Products";

import { lightTheme, darkTheme } from "./themes/index";

import "./App.css";
import "antd/dist/antd.css";

import { Skeleton } from "antd";

const THEME = {
  light: lightTheme,
  dark: darkTheme,
};

export default function App() {
  const { theme } = useSelector((state) => state.commonReducer);

  return (
    <ThemeProvider theme={THEME[theme]}>
      <I18nextProvider i18n={i18n}>
        <Router history={createBrowserHistory()}>
          <Switch>
            <FullLayout exact path="/" component={Login} />
            <FullLayout exact path="/register" component={Register} />
            <Layout exact path="/dashboard" component={Dashboard} />
            <Layout exact path="/products" component={Products} />
            <Layout exact path="/customers" component={Customers} />
            <DefaultLayout exact path="/homepage" component={HomePage} />
          </Switch>
        </Router>
      </I18nextProvider>
    </ThemeProvider>
  );
}
