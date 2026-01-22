import React, { useState } from "react";
import "./App.css";

function App() {
  const [stock, setStock] = useState(0);

  const addStock = () => {
    setStock(stock + 1);
  };

  const removeStock = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };

  return (
    <div className="inventory-container">
      <h1 className="title">Inventory Management</h1>

      <div className="stock-box">
        <h2 className="stock-count">Stock Count: {stock}</h2>
      </div>

      <div className="button-group">
        <button className="btn add-btn" onClick={addStock}>
          Add Stock
        </button>

        <button
          className="btn remove-btn"
          onClick={removeStock}
          disabled={stock === 0}
        >
          Remove Stock
        </button>
      </div>
    </div>
  );
}

export default App;
