import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import usePreventBack from "../hooks/usePreventback";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Min 8 characters").required("Required"),
});

function Login() {
   usePreventBack(); // Prevent back navigation
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    alert("Logged out successfully!");
    navigate("/", { replace: true });
  };

  return (
    <div className="loginPage">
      <div className="loginCard">
        <h2>User Login</h2>

        {!isLoggedIn ? (
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              const savedUser = JSON.parse(localStorage.getItem("userData"));

              // If no user is registered
              if (!savedUser) {
                alert("No user registered. Please signup first.");
                return;
              }

              // If email is not registered
              if (savedUser.email !== values.email) {
                alert("Email is not registered. Please signup.");
                return;
              }

              // If email matches but password is wrong
              if (savedUser.password !== values.password) {
                alert("Password is wrong. Please try again.");
                return;
              }

              // If email and password both match
              localStorage.setItem("userLoggedIn", "true");
              alert("User Signed In Successfully!");
              navigate("/categories", { replace: true });
            }}
          >
            <Form className="loginForm">
              <div className="formGroup">
                <label>Email</label>
                <Field name="email" className="input" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="formGroup">
                <label>Password</label>
                <Field
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <button className="loginBtn" type="submit">
                Login
              </button>
            </Form>
          </Formik>
        ) : (
          <div className="logoutSection">
            <h3>You are already logged in</h3>
            <button className="logoutBtn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
