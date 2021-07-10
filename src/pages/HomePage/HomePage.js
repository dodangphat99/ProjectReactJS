import React, { useCallback ,useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as action from '../../actions/index';

const data={
  loginString: "dodangphat99@gmail.com",
    loginInformation: {
        password: "dodangphat26@",
        googleToken: "",
        facebookToken: ""
    }
}

const HomePage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = () => {(
    dispatch(action.signIn(data)))
  }
  useEffect(() => {
    const token = localStorage.getItem("user");
    if(token !=""){
      console.log("Đăng nhập thành công") 
    }
  },[])
  // const handleOnClick = useCallback(() => history.push("/login"), [history]);
  return (
    <div style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <h1>this is home page</h1>
      <button onClick={onSubmit}>router</button>
    </div>
  );
};

export default HomePage;
