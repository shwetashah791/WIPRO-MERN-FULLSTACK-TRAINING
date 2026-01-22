import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/products";
const CART_API = "http://localhost:3001/cart";

function Products() {
  const [products, setProducts] = useState([]);

  // Form states
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProducts(data);
  };

  // Add to cart
  const addToCart = async (item) => {
    await fetch(CART_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    alert("Added to cart!");
  };

  // Add new product
  const addProduct = async () => {
    const newProduct = { title, price, img };

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    alert("Product added!");
    fetchProducts();
    setTitle("");
    setPrice("");
    setImg("");
  };

  // Delete product
  const deleteProduct = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    fetchProducts();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {/* Add Product Form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Product Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "10px", padding: "10px" }}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginRight: "10px", padding: "10px" }}
        />
        <input
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          style={{ marginRight: "10px", padding: "10px" }}
        />
        <button onClick={addProduct} style={{ padding: "10px 20px" }}>
          Add Product
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map(p => (
          <div
            key={p.id}
            style={{
              width: "240px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "12px"
            }}
          >
            <img
              src={p.img}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
              alt={p.title}
            />
            <h3>{p.title}</h3>
            <p>${p.price}</p>

            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>

            <button
              onClick={() => deleteProduct(p.id)}
              style={{
                marginLeft: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
