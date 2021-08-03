import React, {useEffect} from "react";
import {Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const HomePage = (props) => {
  const {history} = props;
  useEffect(() => {
    const token = localStorage.getItem("user");
    var decoded = jwt_decode(token);
    console.log(decoded)
  },[])
  //const handleOnClick = useCallback(() => history.push("/login"), [history]);
  const logOut = () =>{
    localStorage.removeItem("user");
    history.goBack();
  }
  return (
    <div style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <h1>this is home page</h1>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default HomePage;
