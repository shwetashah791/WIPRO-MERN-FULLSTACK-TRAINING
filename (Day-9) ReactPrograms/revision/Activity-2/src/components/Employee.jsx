import React from "react";

function Employee({ name, role, onPromote }) {
  return (
    <div className="card mb-3 mx-auto" style={{ maxWidth: "300px" }}>
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">{role}</p>
        <button
          className="btn btn-success btn-sm"
          onClick={() => onPromote(name)}
        >
          Promote
        </button>
      </div>
    </div>
  );
}

export default Employee;
