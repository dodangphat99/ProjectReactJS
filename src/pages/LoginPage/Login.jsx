import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Image, Select } from "antd";
import imageLogin from "../../assets/images/login.png";
import * as action from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import i18n from "../../locales/index";
import { useTranslation } from "react-i18next";
import { changeThemeAction } from "../../actions";

import "../../themes/StyleCommon.css";

const Login = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const login = useSelector((state) => state.loginReducer);
  const { theme } = useSelector((state) => state.commonReducer);
  console.log(theme);
  const { t } = useTranslation();

  const onFinish = (values) => {
    const data = {
      loginString: values.email,
      loginInformation: {
        password: values.password,
        googleToken: "",
        facebookToken: "",
      },
    };
    dispatch(action.signIn(data));
  };

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token != null) {
      alert("Đăng nhập thành công");
      history.push("/");
    } else if (login.loginError.status != 0) {
      alert(login.loginError.message);
    }
  }, [login.loginError]);

  function handleChangeLanguage(value) {
    i18n.changeLanguage(value);
  }

  return (
    <div className="ant">
      <div className="header">TASKEEPER</div>
      <Select
        onChange={(value) => handleChangeLanguage(value)}
        value={i18n.language}
      >
        <Select.Option value="vi">VI</Select.Option>
        <Select.Option value="en">EN</Select.Option>
      </Select>
      <Select
        onChange={(value) => dispatch(changeThemeAction(value))}
        value={theme}
      >
        <Select.Option value="light">Light</Select.Option>
        <Select.Option value="dark">Dark</Select.Option>
      </Select>
      <div className="main">
        <nav className="titleSay">{t("login.title")}</nav>
        <nav className="description">{t("login.description")}</nav>
        <Image width={500} height={400} src={imageLogin} />
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item className="titleView">
          <p className="title">{t("login.signIn")}</p>
        </Form.Item>
        <Form.Item
          name="email"
          className="view"
          rules={[
            {
              required: true,
              message: "Please input your Email or Phone!",
            },
          ]}
        >
          <Input className="email" />
        </Form.Item>
        <Form.Item
          name="password"
          className="view"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input className="password" type="password" />
        </Form.Item>
        <Form.Item>
          <Link className="login-form-forgot" to="/forgotPassword">
            {t("login.forgotPassword")}
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            <p className="signInText">{t("login.buttonSignIn")}</p>
          </Button>
        </Form.Item>
        <Form.Item className="signWithOther">
          <p className="signWithOtherText">{t("login.other")}</p>
        </Form.Item>
        <div className="formSignWithOther">
          <Form.Item className="signWithFb">
            <p className="signWithText">f</p>
          </Form.Item>
          <Form.Item className="signWithGoogle">
            <p className="signWithText">G</p>
          </Form.Item>
        </div>
        <Form.Item className="signUpButton">
          <p className="buttonText">
            {t("login.question")}
            <Link className="signUpButtonText" to="/register">
              {t("login.signUp")}
            </Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
