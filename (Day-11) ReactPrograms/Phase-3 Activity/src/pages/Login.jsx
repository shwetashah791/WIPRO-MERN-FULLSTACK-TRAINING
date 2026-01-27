import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Password must contain 1 uppercase, 1 lowercase, 1 number & 1 special character"
    )
    .required("Required"),
});

function Login() {
  const navigate = useNavigate();

  return (
    <div className="loginPage">
      <div className="loginCard">
        <h2>Login</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            localStorage.setItem("isLoggedIn", true);
            navigate("/categories"); // redirect after login
          }}
        >
          <Form className="loginForm">
            <div className="formGroup">
              <Field
                name="email"
                placeholder="Email"
                className="input"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="formGroup">
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="input"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" className="loginBtn">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
