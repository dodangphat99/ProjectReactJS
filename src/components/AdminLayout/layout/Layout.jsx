import React, { useEffect } from "react";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";

import { Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import * as action from "../../../actions/index";

const Layout = (props) => {
  const { exact, path, component: Component } = props;
  const themeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(action.exportDefault.setMode(themeClass));

    dispatch(action.exportDefault.setColor(colorClass));
  }, [dispatch]);

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        return(
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
          <Sidebar {...props} />
          <div className="layout__content">
            <TopNav />
            <div className="layout__content-main">
              <Component {...props} />
            </div>
          </div>
        </div>
      )}}
    />
  );
};

export default Layout;
