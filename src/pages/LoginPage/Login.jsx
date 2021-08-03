import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Image, Select } from "antd";
import imageLogin from "../../assets/images/login.png";
import * as action from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import i18n from "../../locales/index";
import { useTranslation } from "react-i18next";
import {changeThemeAction} from "../../actions";

import * as Style from "./styles";

const Login = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const login = useSelector((state) => state.loginReducer);
  const  {theme}  = useSelector((state) => state.commonReducer);
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
      <Style.Header>TASKEEPER</Style.Header>
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
      <Style.Main>
        <Style.TitleSay>{t("login.title")}</Style.TitleSay>
        <nav className="description">{t("login.description")}</nav>
        <Image width={500} height={400} src={imageLogin} />
      </Style.Main>
      <Style.LoginForm
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Style.View.Item>
          <Style.Title>{t("login.signIn")}</Style.Title>
        </Style.View.Item>
        <Style.View.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email or Phone!",
            },
          ]}
        >
          <Style.Email />
        </Style.View.Item>
        <Style.View.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Style.Password type="password" />
        </Style.View.Item>
        <Form.Item>
          <Style.LoginFormForgot to="/forgotPassword">
            {t("login.forgotPassword")}
          </Style.LoginFormForgot>
        </Form.Item>

        <Form.Item>
          <Style.LoginFormButton type="primary" htmlType="submit">
            <Style.SignInText>{t("login.buttonSignIn")}</Style.SignInText>
          </Style.LoginFormButton>
        </Form.Item>
        <Style.SignWithOther.Item>
          <Style.SignWithOtherText>{t("login.other")}</Style.SignWithOtherText>
        </Style.SignWithOther.Item>
        <Style.FormSignWithOther>
          <Style.SignWithFacebook.Item>
            <Style.SignWithText>f</Style.SignWithText>
          </Style.SignWithFacebook.Item>
          <Style.SignWithGoogle.Item>
            <Style.SignWithText>G</Style.SignWithText>
          </Style.SignWithGoogle.Item>
        </Style.FormSignWithOther>
        <Style.SignUpButton.Item>
          <Style.ButtonText>
            {t("login.question")}
            <Style.SignUpButtonText to="/register">
              {t("login.signUp")}
            </Style.SignUpButtonText>
          </Style.ButtonText>
        </Style.SignUpButton.Item>
      </Style.LoginForm>
    </div>
  );
};
export default Login;
