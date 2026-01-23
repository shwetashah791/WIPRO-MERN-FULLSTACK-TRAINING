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
    <div style={styles.page}>
      <h2 style={styles.heading}>🛒 Products</h2>

      {/* Add Product Form */}
      <div style={styles.form}>
        <input
          placeholder="Product Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />
        <input
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          style={styles.input}
        />
        <button onClick={addProduct} style={styles.addBtn}>
          Add Product
        </button>
      </div>

      {/* Products List */}
      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            <img
              src={p.img}
              style={styles.image}
              alt={p.title}
            />
            <h3 style={styles.title}>{p.title}</h3>
            <p style={styles.price}>₹ {p.price}</p>

            <div style={styles.btnGroup}>
              <button onClick={() => addToCart(p)} style={styles.cartBtn}>
                Add to Cart
              </button>

              <button
                onClick={() => deleteProduct(p.id)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🔹 Inline CSS */
const styles = {
  page: {
  padding: "30px",
  width: "100%",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#0b3d91",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "25px",
    flexWrap: "wrap",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    width: "220px",
    outline: "none",
    marginLeft: "60px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  addBtn: {
    padding: "12px 22px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #0b3d91, #1a73e8)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    marginLeft: "60px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
    justifyContent: "center",
  },
  card: {
    width: "260px",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    textAlign: "center",
    transition: "transform 0.3s",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "12px",
  },
  title: {
    margin: "10px 0",
    color: "#333",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2e8b57",
    marginBottom: "15px",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  cartBtn: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ff7a00",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#e63946",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Products;
