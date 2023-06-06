import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SignIn from "../components/Admin/SignIn";

const Protected = ({ children, destination }) => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");
  if (!isLoggedIn || isLoggedIn === undefined || isLoggedIn === null) {
    window.location.replace("/sign-in");
    return <SignIn/>
  } else {
    return children ? children : <Outlet />;
  }
};

export default Protected;
