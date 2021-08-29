import styled from "styled-components";
import { Radio , Form, Button,Input  } from "antd";



export const TitleView = styled(Form.Item)`
  height: 80px;
`;

export const Leftpage = styled.div`
  width: 35%;
  height: 1052px;
  left: 0px;
  top: 0px;
  background: #add2c9;
`;
export const Title = styled.div`
  width: 20%;
  height: 100px;
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
  width: 500px;
  height: 56px;
  top: 60px;
 

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 33px;
  text-align: center;

  color: #2d7474;
`;

export const Rightpage = styled.div`
  margin-top:190px
`;

export const Centerpage = styled.div`
  display:flex;
  justify-content: center;
`;


export const RegisterForm = styled(Form)`
  .ant-form-item{
    margin-bottom: 0px !important;
  }
  display: flex;
  flex-direction: column;
  background-color: white;
  position: fixed;
  top: 110px;
  right: 130px;
  height: calc(100vh - 200px);
  width: 1000px;
  border: 1px solid #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  align-items: center;
`;

export const Firstname = styled(Input)`
  margin-bottom: 0px !important;
  width: 770px;
  height: 52px;
  margin-right:15px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left:45px;
`;

export const Lastname = styled(Input)`
margin-bottom: 0px !important;
  width: 770px;
  height: 52px;
  margin-right:15px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left:45px;
`;

export const Email = styled(Input)`
  width: 770px;
  height: 52px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left:45px;
`;

export const Password = styled(Input.Password)`
  width: 770px;
  height: 52px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left:45px;
`;

export const PhoneNumber = styled(Input)`
  width: 770px;
  height: 52px;
  border: 1px solid #000000;
  box-sizing: border-box;
  margin-left:45px;
  border-radius: 8px;
`;


export const RegisterFormButton = styled(Button)`
  background: #2d7474;
  border-radius: 12px;
  width: 243px;
  height: 49px;
  justify-content: center;
  margin-bottom: 0;
  top:110px;
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
`;

/* export const Year = styled(Cascader)`
  border-radius: 12px;
  width: 243px;
  height: 49px;
  justify-content: center;
  margin-bottom: 0;
  
`;
export const Dayofbirth = styled(Cascader)`
  border-radius: 12px;
  width: 243px;
  height: 49px;
  justify-content: center;
  margin-bottom: 0;
  margin-right:10px;
`;
export const Monthofbirth = styled(Cascader)`
  border-radius: 12px;
  width: 243px;
  height: 49px;
  justify-content: center;
  margin-bottom: 0;
`; */