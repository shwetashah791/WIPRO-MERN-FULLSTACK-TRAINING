import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";

const API = "http://localhost:3001/products";
const CART_API = "http://localhost:3001/cart";

const ProductSchema = Yup.object({
  title: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  img: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
});

function Categories() {
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState("All");

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("search") || "";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProducts(data);
  };

  const addToCart = async (item) => {
    await fetch(CART_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    alert("Added to cart");
  };

  const deleteProduct = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  const filtered =
    (cat === "All" ? products : products.filter((p) => p.category === cat))
      .filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="page">
      <h2 className="heading">🛍️ Categories</h2>

      <Formik
        initialValues={{ title: "", price: "", img: "", category: "Men" }}
        validationSchema={ProductSchema}
        onSubmit={async (values, { resetForm }) => {
          await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          fetchProducts();
          resetForm();
        }}
      >
        <Form className="form">
          <Field name="title" placeholder="Product name" className="searchInput" />
          <ErrorMessage name="title" component="div" className="error" />

          <Field name="price" placeholder="Price" className="searchInput" />
          <ErrorMessage name="price" component="div" className="error" />

          <Field name="img" placeholder="Image URL" className="searchInput" />
          <ErrorMessage name="img" component="div" className="error" />

          <Field as="select" name="category" className="searchInput">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </Field>

          <button type="submit" className="cartBtn">
            Add
          </button>
        </Form>
      </Formik>

      <div className="btnGroup">
        {["All", "Men", "Women"].map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className="catBtn"
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.length === 0 ? (
          <h2 style={{ textAlign: "center", width: "70%" }}>
            Product Not Available
          </h2>
        ) : (
          filtered.map((p) => (
            <div key={p.id} className="card">
              <img src={p.img} alt={p.title} className="image" />
              <h3>{p.title}</h3>
              <p className="price">₹ {p.price}</p>

              <button onClick={() => addToCart(p)} className="cartBtn">
                Add to Cart
              </button>
              <button onClick={() => deleteProduct(p.id)} className="deleteBtn">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Categories;
