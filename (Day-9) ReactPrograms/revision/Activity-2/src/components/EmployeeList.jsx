import React, { useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [employees] = useState([
    { name: "Shweta", role: "Developer" },
    { name: "Ravi", role: "Designer" },
    { name: "Amit", role: "Tester" },
  ]);

  const handlePromote = (name) => {
    alert(`${name} is promoted 🎉`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h2 className="mb-4">Employee List</h2>

        {employees.map((emp, index) => (
          <Employee
            key={index}
            name={emp.name}
            role={emp.role}
            onPromote={handlePromote}
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
