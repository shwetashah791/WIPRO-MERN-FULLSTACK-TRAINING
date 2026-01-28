import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import usePreventBack from "../hooks/usePreventback";

const API = "http://localhost:3001/products";
const CART_API = "http://localhost:3001/cart";

function Categories() {
  usePreventBack();

  const [products, setProducts] = useState([]);
  const location = useLocation();

  const searchQuery =
    new URLSearchParams(location.search).get("search")?.trim() || "";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProducts(data);
  };

  const addToCart = async (product) => {
    await fetch(CART_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    alert("Added to cart");
  };

  const filtered = products.filter(
    (p) =>
      p.title &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page">
      <h2 className="heading">🛍️ Categories</h2>

      {/* 🔴 Show message if no products found */}
      {filtered.length === 0 && searchQuery ? (
        <p className="not-found">
          ❌ Product <strong>"{searchQuery}"</strong> not available
        </p>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <div key={p.id} className="card">
              <img src={p.img} alt={p.title} className="image" />
              <h3>{p.title}</h3>
              <p className="price">₹ {p.price}</p>
              <p className="category">{p.category}</p>
              <button
                onClick={() => addToCart(p)}
                className="cartBtn"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
