import React from "react";
import * as Style from "./styles";
import { Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import imageRegister from "../../assets/images/register.png";
import * as action from "../../actions/index";
import { useTranslation } from "react-i18next";

const Register = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const register = useSelector((state) => state.registerReducer);
  const { t } = useTranslation();

  const onFinish = (values) => {
    const data = {
      registerString: values.email,
      registerInformation: {
        Fullname: values.Fullname,
        password: values.password,
        Dateofbirth: values.Dateofbirth,
        PhoneNumber: values.PhoneNumber,
      },
    };
    dispatch(action.registerSuccess(data));
    console.log(data);
  };

  return (
    <div className="ant">
      <Style.Leftpage>
        <Style.Title>TASKEEPER</Style.Title>
        <Image
          style={{ marginTop: "300px" }}
          width={500}
          height={400}
          src={imageRegister}
        />
      </Style.Leftpage>
      

      <Style.Title></Style.Title>

      <Style.RegisterForm
        name="normal_register"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Style.Signup>Sign up to Taskeeper</Style.Signup>
        <div style={{ display: "flex" }}>
          <Style.TitleView
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Style.Fullname placeholder="FullName" />
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
            <Style.Email placeholder="Email" />
          </Style.TitleView>
          
        </div>

        <Style.TitleView
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Style.Password placeholder="Password" />
        </Style.TitleView>

        <Style.TitleView
          name="repassword"
          rules={[
            {
              required: true,
              message: "Please input your Repassword!",
            },
          ]}
        >
          <Style.RePassword placeholder="Repassword" />
        </Style.TitleView>
        <div style={{ display: "flex" }}>
        <Style.TitleView
          name="dateofbirth"
          rules={[
            {
              required: true,
              message: "Please input your date of birth!",
            },
          ]}
        >
          <Style.Dateofbirth placeholder="Date of birth" />
        </Style.TitleView>

        <Style.TitleView
          name="phonenumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Style.PhoneNumber placeholder="Phone Number" />
        </Style.TitleView>
        </div>
        
          <Style.RegisterFormButton
            type="primary"
            htmlType="submit"
          >
            <Style.RegisterText>REGISTER</Style.RegisterText>
          </Style.RegisterFormButton>

        

      </Style.RegisterForm>
    </div>
  );
};
export default Register;
