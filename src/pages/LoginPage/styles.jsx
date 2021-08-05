import styled from "styled-components";
import { Select, Form, Button,Input } from "antd";
import { Link } from "react-router-dom";

export const TitleView = styled(Form.Item)`
  height: 80px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
  padding-left: 78px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  color: #2d7474;
  height: 202px;
  background-color: rgba(173, 210, 201, 0.7);
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-left: 186px;
  width: 100vw;
  min-height: calc(100vh - 202px);
`;

export const TitleSay = styled.nav`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  color:  black;
`;

export const Description = styled.nav`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color:black;
`;

export const LoginForm = styled(Form)`
  .ant-form-item{
    margin-bottom: 0px !important;
  }
  display: flex;
  flex-direction: column;
  background-color: white;
  position: fixed;
  top: 121px;
  right: 90px;
  height: calc(100vh - 242px);
  width: 536px;
  border: 1px solid #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  align-items: center;
`;

export const Title = styled.p`
  font-family: Roboto Mono, monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  margin-top: 22px;
`;

export const Email = styled(Input)`
  margin-bottom: 0px !important;
  width: 409px;
  height: 52px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Password = styled(Input)`
  width: 409px;
  height: 52px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const TitleInput = styled(Form)`
  display: flex;
  position: absolute;
  left: 15px;
  top: -12px;
  height: 14px;
  z-index: 5;
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  background-color: white;
`;

export const LoginFormForgot = styled(Link)`
  color: #488b8f;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;

export const LoginFormButton = styled(Button)`
  background: #2d7474;
  border-radius: 12px;
  width: 243px;
  height: 49px;
  justify-content: center;
  margin-bottom: 0;
`;

export const SignInText = styled.p`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  padding-top: 5px;
`;

export const SignWithOther = styled.div`
  margin-top: 10px;
`;

export const SignWithOtherText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-size: 16px;
`;

export const SignWithFacebook = styled.div`
  width: 72px;
  height: 72px;
  background: #256aba;
  display: flex;
  border-radius: 50px;
  padding-top: 11px;
`;

export const FormSignWithOther = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
`;

export const SignWithTextFb = styled.p`
  display: flex;
  text-align: center;
  padding-left: 29px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #ffffff;
`;

export const SignWithTextGoogle = styled.p`
  display: flex;
  text-align: center;
  padding-left: 24px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #ffffff;
`;

export const SignWithGoogle = styled.div`
  background: #ea4335;
  width: 72px;
  height: 72px;
  display: flex;
  border-radius: 50px;
  padding-top: 11px;
`;

export const SignUpButton = styled.div`
  margin-top: 20px;
`;

export const ButtonText = styled.p`
  color: #000000;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;

export const SignUpButtonText = styled(Link)`
  color: red;
`;

export const View = styled(Form)`
  height: 80px;
`;
