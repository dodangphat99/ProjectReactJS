import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const HomePage = (props) => {
  const { history } = props;
  useEffect(() => {
    // const token = localStorage.getItem("user");
    // var decoded = jwt_decode(token);
    // console.log(decoded);
  }, []);
  //const handleOnClick = useCallback(() => history.push("/login"), [history]);
  return (
    <div>
      <h1>this is home page</h1>
    </div>
  );
};

export default HomePage;
