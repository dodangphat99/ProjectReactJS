import React, {useEffect} from "react";
import { useHistory,Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = (props) => {
  const result = useSelector((state) => state.loginReducer.SIGN_IN_SUCCESS);
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("user");
    if(token !=null){
      console.log("Đăng nhập thành công") 
    }
  },[result])
  console.log(result)
  //const handleOnClick = useCallback(() => history.push("/login"), [history]);
  const logOut = () =>{
    localStorage.removeItem("user");
    history.push("/login");
  }
  return (
    <div style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <h1>this is home page</h1>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default HomePage;
