import React from "react";
import EmployeeCounter from "./components/EmployeeCounter";
import Product from "./components/Product";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Inventory Dashboard</h1>
      <EmployeeCounter />
      <Product />
    </div>
  );
}

export default App;
