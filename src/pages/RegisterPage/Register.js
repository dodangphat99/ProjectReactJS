import React, { useEffect, useState } from "react";
import * as Style from "./styles";
import { Image, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import imageRegister from "../../assets/images/register.png";
import * as action from "../../actions/index";
import { useTranslation } from "react-i18next";
import { UserOutlined, MailOutlined, PhoneOutlined  } from '@ant-design/icons';


const Register = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const register = useSelector((state) => state.registerReducer);
  const { t } = useTranslation();

  const onFinish = (values) => {
    const data = {
      registerInformation: {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone_number: values.PhoneNumber,
        day:'23',
        month:'08',
        year:'1999',
      },
    };
    dispatch(action.registerSuccess(data));
    console.log(data);
  };

  useEffect(() => {
    dispatch(action.national());
  }, [dispatch]);

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

      <Style.RegisterForm
        name="normal_register"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Style.Signup>Sign up to Taskeeper</Style.Signup>
        <Style.Rightpage>
          <Style.TitleView
            name="firstname"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Style.Firstname placeholder="First Name"  prefix={<UserOutlined style={{marginLeft:"10px", marginRight:"10px"}}/>} size="large"/>
          </Style.TitleView>
          <Style.TitleView
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Style.Lastname placeholder="Last Name" prefix={<UserOutlined style={{marginLeft:"10px", marginRight:"10px"}}/>} size="large" />
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
            <Style.Email placeholder="Email" prefix={<MailOutlined style={{marginLeft:"10px", marginRight:"10px"}} />} size="large" />
          </Style.TitleView>
          <Space direction="vertical">
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
          </Space>
          <Style.TitleView
            name="phonenumber"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Style.PhoneNumber placeholder="Phone Number" prefix={<PhoneOutlined style={{marginLeft:"10px", marginRight:"10px"}} />} size="large"/>
          </Style.TitleView>
        </Style.Rightpage>

        <Style.RegisterFormButton type="primary" htmlType="submit">
          <Style.RegisterText>REGISTER</Style.RegisterText>
        </Style.RegisterFormButton>
      </Style.RegisterForm>
    </div>
  );
};
export default Register;
