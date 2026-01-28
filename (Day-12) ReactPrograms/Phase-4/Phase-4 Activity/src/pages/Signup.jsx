import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import usePreventBack from "../hooks/usePreventback";
const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Min 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain uppercase, lowercase, number and special character"
    )
    .required("Required"),
});

function Signup() {
  usePreventBack(); // Prevent back navigation
  const navigate = useNavigate();

  return (
    <div className="loginPage">
      <div className="loginCard">
        <h2>Create Account</h2>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // Save user data in localStorage
            localStorage.setItem("userData", JSON.stringify(values));

            alert("Signup Successful! Please Login.");
            navigate("/login", { replace: true });
          }}
        >
          <Form className="loginForm">
            <div className="formGroup">
              <label>Name</label>
              <Field name="name" className="input" placeholder="Name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

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
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button className="loginBtn" type="submit">
              Signup
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
