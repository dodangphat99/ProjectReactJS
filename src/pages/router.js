import React from "react";

const HomePage = React.lazy(() => import("./HomePage/HomePage.jsx"))
const Register  = React.lazy(()=>import("./RegisterPage/Register"))
const Login  = React.lazy(()=>import("./LoginPage/Login.jsx"))
const ForgotPassword  = React.lazy(()=>import("./ForgotPassword/ForgotPassword"))

const routes = [
    {
        path:"/homepage",
        exact:true,
        public:true,
        component:HomePage
    },
    {
        path:"/",
        exact:true,
        public:true,
        component:Login
    },
    {
        path:"/register",
        exact:true,
        public:true,
        component:Register
    },
    {
        path:"/forgotPassword",
        exact:true,
        public:true,
        component:ForgotPassword
    },
]
export default routes;