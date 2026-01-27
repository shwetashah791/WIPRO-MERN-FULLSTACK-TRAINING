import { Formik, Form, Field, ErrorMessage } from "formik";
import { employeeSchema } from "./ValidationSchema";
import Button from "@mui/material/Button";

function EmployeeForm() {
  return (
    <>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={employeeSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Form submitted");
        }}
      >
        <Form>
          <div>
            <label>Enter Name :</label>
            <Field name="name" />
            <ErrorMessage name="name" />
          </div>

          <div>
            <label>Enter Email :</label>
            <Field name="email" />
            <ErrorMessage name="email" />
          </div>

          <div>
            <label>Enter Password :</label>
            <Field name="password" />
            <ErrorMessage name="password" />
          </div>

          <Button type="submit" variant="contained" color="success">
            Success
          </Button>
        </Form>
      </Formik>
    </>
  );
}

export default EmployeeForm; 
