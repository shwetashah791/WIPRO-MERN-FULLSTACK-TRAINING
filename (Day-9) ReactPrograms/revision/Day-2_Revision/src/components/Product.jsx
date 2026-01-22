import React, { useState } from "react";


function Product() {
  const [stock, setStock] = useState(0);

  const addStock = () => setStock(stock + 1);
  const removeStock = () => {
    if (stock > 0) setStock(stock - 1);
  };

  return (
    <div className="card">
      <h2>Product Inventory</h2>
      <p className="count">{stock}</p>
      <div className="btn-group">
        <button className="btn add" onClick={addStock}>
          Add Stock
        </button>
        <button
          className="btn remove"
          onClick={removeStock}
          disabled={stock === 0}
        >
          Remove Stock
        </button>
      </div>
    </div>
  );
}

export default Product;
