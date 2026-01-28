//import React from 'react'
import React, { useEffect, useState } from "react";
import employeeStore from "../stores/EmployeeStore";
import addEmployee from "../actions/EmployeeActions";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(employeeStore.getAllEmployees());

    const updateUI = () => {
      setEmployees([...employeeStore.getAllEmployees()]);
    };

    // Use correct method names
    employeeStore.addChangeListener(updateUI);

    return () => {
      employeeStore.removeChangeListener(updateUI);
    };
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <button onClick={() => addEmployee("Niti")}>Add Employee</button>
      {employees.map((emp, index) => (
        <p key={index}>{emp}</p>
      ))}
    </div>
  );
}

export default EmployeeList;
