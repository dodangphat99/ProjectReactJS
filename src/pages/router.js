import React from "react";

const HomePage = React.lazy(() => import("./HomePage/HomePage"))
const Register  = React.lazy(()=>import("./RegisterPage/Register"))
const Login  = React.lazy(()=>import("./LoginPage/Login"))

export default [
    {
        path:"/",
        exact:true,
        public:true,
        component:HomePage
    },
    {
        path:"/login",
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
]