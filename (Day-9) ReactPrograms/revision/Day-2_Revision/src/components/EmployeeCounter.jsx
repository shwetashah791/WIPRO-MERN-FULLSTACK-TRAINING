import React, { useState } from "react";


function EmployeeCounter() {
  const [employeeCount, setEmployeeCount] = useState(0);

  const addEmployee = () => setEmployeeCount(employeeCount + 1);
  const removeEmployee = () => {
    if (employeeCount > 0) setEmployeeCount(employeeCount - 1);
  };

  return (
    <div className="card">
      <h2>Employee Counter</h2>
      <p className="count">{employeeCount}</p>
      <div className="btn-group">
        <button className="btn add" onClick={addEmployee}>
          Add Employee
        </button>
        <button
          className="btn remove"
          onClick={removeEmployee}
          disabled={employeeCount === 0}
        >
          Remove Employee
        </button>
      </div>
    </div>
  );
}

export default EmployeeCounter;
