import { useEffect, useState } from "react";

const API = "http://localhost:3001/products";
const CART_API = "http://localhost:3001/cart";

function Categories() {
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState("All");

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = cat === "All" ? products : products.filter(p => p.category === cat);

  const addToCart = async (item) => {
    await fetch(CART_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    alert("Added to cart!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Categories</h2>
      <button onClick={() => setCat("All")}>All</button>
      <button onClick={() => setCat("Men")}>Men</button>
      <button onClick={() => setCat("Women")}>Women</button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {filtered.map(p => (
          <div key={p.id} style={{ width: "240px", padding: "20px", border: "1px solid #ccc", borderRadius: "12px" }}>
            <img src={p.img} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
