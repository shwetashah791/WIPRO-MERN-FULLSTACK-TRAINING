import React, { useRef, useState } from "react";

function RegistrationForm() {
 
  // UNCONTROLLED (useRef)
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

// CONTROLLED (useState)
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;

    let validationErrors = {};

    // First Name
    if (!firstName) {
      validationErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
      validationErrors.firstName = "Only alphabets allowed";
    }

    // Last Name
    if (!lastName) {
      validationErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
      validationErrors.lastName = "Only alphabets allowed";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
    ) {
      validationErrors.password =
        " Password must contain min 8 chars, 1 uppercase, 1 lowercase, 1 number & 1 special character";
    }


    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("");
    } else {
      setErrors({});
      setStatus("Registration Successful ✅");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-4">User Registration</h3>

        {/* First Name */}
        <input
          type="text"
          className="form-control mb-1"
          placeholder="First Name"
          ref={firstNameRef}
        />
        {errors.firstName && (
          <small className="text-danger">{errors.firstName}</small>
        )}

        {/* Last Name */}
        <input
          type="text"
          className="form-control mt-3 mb-1"
          placeholder="Last Name"
          ref={lastNameRef}
        />
        {errors.lastName && (
          <small className="text-danger">{errors.lastName}</small>
        )}

        {/* Email */}
        <input
          type="email"
          className="form-control mt-3 mb-1"
          placeholder="Email"
          ref={emailRef}
        />
        {errors.email && (
          <small className="text-danger">{errors.email}</small>
        )}

        {/* Password */}
        <input
          type="password"
          className="form-control mt-3 mb-1"
          placeholder="Password"
          ref={passwordRef}
        />
        {errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}

        {/* Submit Button */}
        <button
          className="btn btn-primary w-100 mt-4"
          onClick={handleSubmit}
        >
          Register
        </button>

        {/* Submission Status */}
        {status && (
          <div className="alert alert-success text-center mt-3">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm; 