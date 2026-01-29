import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import usePreventBack from "../hooks/usePreventback";

const AdminSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string().min(6, "Min 6 characters").required("Required"),
});

export default function AdminLogin() {
   usePreventBack(); // Prevent back navigation
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2 className="heading">Admin Login</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={AdminSchema}
        onSubmit={(values) => {
          if (values.email === "admin@gmail.com" && values.password === "admin123") {
            localStorage.setItem("adminLoggedIn", "true");
            navigate("/products"); //  after login navigate to Products
          } else {
            alert("❌ Invalid Admin Credentials");
          }
        }}
      >
        <Form className="form">
          <Field name="email" placeholder="Email" className="input" />
          <ErrorMessage name="email" component="div" className="error" />

          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="input"
          />
          <ErrorMessage name="password" component="div" className="error" />

          <button type="submit" className="addBtn">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
