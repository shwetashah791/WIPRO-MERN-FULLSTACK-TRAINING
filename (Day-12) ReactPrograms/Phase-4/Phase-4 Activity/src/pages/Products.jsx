import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import usePreventBack from "../hooks/usePreventback";

const API = "http://localhost:3001/products";
const CART_API = "http://localhost:3001/cart";

const ProductSchema = Yup.object({
  title: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  img: Yup.string().url("Invalid URL").required("Required"),
  category: Yup.string().required("Required"),
});

function Products() {
   usePreventBack(); // Prevent back navigation
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState("All");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(API);
    setProducts(await res.json());
  };

  const addToCart = async (item) => {
    await fetch(CART_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    alert("✅ Added to cart");
  };

  const deleteProduct = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  const filtered = products.filter((p) => {
    return cat === "All" || p.category === cat;
  });

  return (
    <div className="page">
      <h2 className="heading">🛍️ Products</h2>

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
          <Field name="title" placeholder="Product name" className="input" />
          <ErrorMessage name="title" component="div" className="error" />

          <Field name="price" placeholder="Price" className="input" />
          <ErrorMessage name="price" component="div" className="error" />

          <Field name="img" placeholder="Image URL" className="input" />
          <ErrorMessage name="img" component="div" className="error" />

          <Field as="select" name="category" className="input">
            <option>Men</option>
            <option>Women</option>
          </Field>

          <button type="submit" className="addBtn">
            Add Product
          </button>
        </Form>
      </Formik>

      <div className="btnGroup">
        {["All", "Men", "Women"].map((c) => (
          <button key={c} onClick={() => setCat(c)} className="catBtn">
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.length === 0 ? (
          <h3>❌ Product Not Available</h3>
        ) : (
          filtered.map((p) => (
            <div key={p.id} className="card">
              <img src={p.img} alt={p.title} className="image" />
              <h4>{p.title}</h4>
              <p>₹ {p.price}</p>
              <button onClick={() => addToCart(p)} className="cartBtn">
                Add
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

export default Products;
