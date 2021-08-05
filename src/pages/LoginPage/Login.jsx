import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form,  Image } from "antd";
import imageLogin from "../../assets/images/login.png";
import * as action from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import i18n from "../../locales/index";
import { useTranslation } from "react-i18next";
import * as Style from "./styles";

const Login = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const login = useSelector((state) => state.loginReducer);
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
    console.log(data);
  };

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token != null) {
      alert("Đăng nhập thành công");
      history.push("/homepage");
    } else if (login.loginError.status != 0) {
      alert(login.loginError.message);
    }
  }, [login.loginError]);

  return (
    <div className="ant">
      <Style.Header>TASKEEPER</Style.Header>
      <Style.Main>
        <Style.TitleSay>{t("login.title")}</Style.TitleSay>
        <Style.Description>{t("login.description")}</Style.Description>
        <Image width={500} height={400} src={imageLogin} />
      </Style.Main>
      <Style.LoginForm
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Style.TitleView>
          <Style.Title>{t("login.signIn")}</Style.Title>
        </Style.TitleView>
        <Style.TitleView
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email or Phone!",
            },
          ]}
        >
          <Style.Email/>
        </Style.TitleView>
        <Style.TitleView
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Style.Password type="password" />
        </Style.TitleView>
        <Form.Item>
          <Style.LoginFormForgot to="/forgotPassword">
            {t("login.forgotPassword")}
          </Style.LoginFormForgot>
        </Form.Item>

        <Form.Item>
          <Style.LoginFormButton
            type="primary"
            htmlType="submit"
          >
            <Style.SignInText>{t("login.buttonSignIn")}</Style.SignInText>
          </Style.LoginFormButton>
        </Form.Item>
        <Style.SignWithOther>
          <Style.SignWithOtherText>{t("login.other")}</Style.SignWithOtherText>
        </Style.SignWithOther>
        <Style.FormSignWithOther>
          <Style.SignWithFacebook >
            <Style.SignWithTextFb>f</Style.SignWithTextFb>
          </Style.SignWithFacebook>
          <Style.SignWithGoogle>
            <Style.SignWithTextGoogle>G</Style.SignWithTextGoogle>
          </Style.SignWithGoogle>
        </Style.FormSignWithOther>
        <Style.SignUpButton>
          <Style.ButtonText>
            {t("login.question")}
            <Style.SignUpButtonText to="/register">
              {t("login.signUp")}
            </Style.SignUpButtonText>
          </Style.ButtonText>
        </Style.SignUpButton>
      </Style.LoginForm>
    </div>
  );
};
export default Login;
