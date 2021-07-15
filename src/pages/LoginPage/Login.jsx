import React, { useEffect } from "react";
import { useHistory,Link } from "react-router-dom";
import { Form, Input, Button, Image } from "antd";
import imageLogin from "../../assets/images/login.png";
import * as action from "../../actions/index";
import "../../themes/StyleCommon.css";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginSuccess = useSelector((state) => state.loginReducer.loginSuccess);
  const loginError = useSelector((state) => state.loginReducer.loginError);
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
    console.log(token);
    if(token !=null){
      alert("Đăng nhập thành công");
      history.push("/");
    }else if(loginError.status != 0){
      alert(loginError.message);
   }
  },[loginSuccess,loginError])
  return (
    <div className="ant">
      <div className="header">TASKEEPER</div>
      <div className="main">
        <nav className="titleSay">WELCOME TO US</nav>
        <nav className="description">
          Where to find the suitable job for you
        </nav>
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
          <p className="title">Sign In</p>
        </Form.Item>
        <Form.Item
        className="view"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email or Phone!",
            },
          ]}
        >
          <Input className="email"/>
        </Form.Item>
        <Form.Item
        className="view"
          name="password"
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
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            <p className="signInText">SIGN IN</p>
          </Button>
        </Form.Item>
        <Form.Item className="signWithOther">
          <p className="signWithOtherText">Or sign in with</p>
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
            Don't have an account? <Link className="signUpButtonText" to="/register">Sign up</Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
