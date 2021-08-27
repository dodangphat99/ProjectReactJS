import styled from "styled-components";
import { Radio , Form, Button,Input } from "antd";

export const TitleView = styled(Form.Item)`
  height: 80px;
  margin-top:10px
`;

export const Leftpage = styled.div`
  width: 35%;
  height: 1024px;
  left: 0px;
  top: 0px;
  background: #add2c9;
`;
export const Title = styled.div`
  position: absolute;
  width: 20%;
  height: 80px;
  left: 0px;
  top: 100px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 66px;
  text-align: center;
  color: #000000;
`;

export const Signup = styled.div`
  position: absolute;
  width: 347px;
  height: 56px;
  right: 325px;
  top: 30px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  text-align: center;

  color: #2d7474;
`;



export const RegisterForm = styled(Form)`
  .ant-form-item{
    margin-bottom: 0px !important;
  }
  display: flex;
  flex-direction: column;
  background-color: white;
  position: fixed;
  top: 140px;
  right: 90px;
  height: calc(100vh - 242px);
  width: 1000px;
  border: 1px solid #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  align-items: center;
`;

export const Fullname = styled(Input)`
  margin-bottom: 0px !important;
  top: 100px;
  width: 409px;
  height: 52px;
  margin-right:15px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Email = styled(Input)`
  width: 409px;
  height: 52px;
  top: 100px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Password = styled(Input)`
  width: 409px;
  height: 52px;
  top: 110px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const RePassword = styled(Input)`
  top: 115px;
  width: 409px;
  height: 52px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Dateofbirth = styled(Input)`
  top: 120px;
  width: 409px;
  height: 52px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const PhoneNumber = styled(Input)`
  top: 120px;
  width: 409px;
  height: 52px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 15px
`;


export const RegisterFormButton = styled(Button)`
  background: #2d7474;
  border-radius: 12px;
  width: 243px;
  height: 49px;
  justify-content: center;
  margin-bottom: 0;
  top:150px
`;


export const RegisterText = styled.p`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  padding-top: 5px;
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

export const SexButton = styled(Radio)`
  border-radius: 12px;
  width: 243px;
  height: 49px;
  justify-content: center;
  margin-bottom: 0;
  top:150px
`;