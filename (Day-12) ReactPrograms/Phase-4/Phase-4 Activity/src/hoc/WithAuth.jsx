import React from "react";
import { useNavigate } from "react-router-dom";

function withAuth(Component) {
  return function Wrapped(props) {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("userLoggedIn");

    if (!isLoggedIn) {
      navigate("/login", { replace: true });
      return null;
    }
    return <Component {...props} />;
  };
}

export default withAuth;
