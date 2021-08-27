import React, { useEffect, useState } from "react";
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
  const [value, setValue] = useState();

  const onFinish = (values) => {
    const data = {
      registerString: values.email,
      registerInformation: {
        Fullname: values.Fullname,
        password: values.password,
        Dateofbirth: values.Dateofbirth,
        PhoneNumber: values.PhoneNumber,
        Sex: value,
      },
    };
    dispatch(action.registerSuccess(data));
    console.log(data);
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("user");
  //   if (token != null) {
  //     alert("Đăng kí thành công");
  //     history.push("/registerpage");
  //   } else if (register.registerError.status != 0) {
  //     alert(register.registerError.message);
  //   }
  // }, [register.registerError]);

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

        <Style.TitleView
            name="sex"
            rules={[
              {
                required: true,
                message: "Please choose sex!",
              },
            ]}
          >
            <Style.SexButton.Group onChange={onChange} value={value}>
              <Style.SexButton value={"male"}>Male</Style.SexButton>
              <Style.SexButton value={"female"}>Female</Style.SexButton>
              <Style.SexButton value={"other"}>Other</Style.SexButton>
            </Style.SexButton.Group>
          </Style.TitleView>

        <Style.RegisterFormButton type="primary" htmlType="submit">
          <Style.RegisterText>REGISTER</Style.RegisterText>
        </Style.RegisterFormButton>
      </Style.RegisterForm>
    </div>
  );
};
export default Register;
