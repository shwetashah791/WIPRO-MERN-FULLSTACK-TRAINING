import { useEffect, useState } from "react";

const API = "http://localhost:3001/products";
const CART_API = "http://localhost:3001/cart";

function Categories() {
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState("All");

  // Form states
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("Men");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(API);
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
    alert("✅ Added to cart!");
  };

  // Add new product
  const addProduct = async () => {
    const newProduct = { title, price, img, category };

    await fetch(API, {
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
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    fetchProducts();
  };

  const filtered =
    cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>🛍️ Shop by Category</h2>

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

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.select}
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>

        <button onClick={addProduct} style={styles.addBtn}>
          Add Product
        </button>
      </div>

      {/* Category Buttons */}
      <div style={styles.btnGroup}>
        {["All", "Men", "Women"].map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            style={{
              ...styles.catBtn,
              ...(cat === c ? styles.activeBtn : {}),
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Products */}
      <div style={styles.grid}>
        {filtered.map((p) => (
          <div key={p.id} style={styles.card}>
            <img src={p.img} alt={p.title} style={styles.image} />

            <h3 style={styles.title}>{p.title}</h3>
            <p style={styles.price}>₹ {p.price}</p>

            <div style={styles.btnGroup2}>
              <button style={styles.cartBtn} onClick={() => addToCart(p)}>
                Add to Cart
              </button>

              <button
                style={styles.deleteBtn}
                onClick={() => deleteProduct(p.id)}
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
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  select: {
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
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
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "30px",
  },
  catBtn: {
    padding: "10px 20px",
    borderRadius: "20px",
    border: "1px solid #0b3d91",
    backgroundColor: "#fff",
    color: "#0b3d91",
    cursor: "pointer",
    fontWeight: "bold",
  },
  activeBtn: {
    backgroundColor: "#0b3d91",
    color: "#fff",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
    justifyContent: "center",
  },
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  title: {
    margin: "10px 0",
    color: "#333",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2e8b57",
    marginBottom: "12px",
  },
  btnGroup2: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  cartBtn: {
    padding: "10px",
    width: "120px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ff7a00",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "10px",
    width: "120px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#e63946",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Categories;
