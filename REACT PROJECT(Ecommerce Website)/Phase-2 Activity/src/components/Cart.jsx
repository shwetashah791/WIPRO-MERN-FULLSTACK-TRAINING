import { useEffect, useState } from "react";

const CART_API = "http://localhost:3001/cart";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(CART_API)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const removeItem = (id) => {
    fetch(`${CART_API}/${id}`, { method: "DELETE" }).then(() => {
      setCart(cart.filter((item) => item.id !== id));
    });
  };

  return (
    <div className="page">
      <h2 className="heading">🛒 My Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cardCart">
            <img
              src={item.image || "https://via.placeholder.com/120"}
              alt={item.title}
              className="imageCart"
            />

            <div className="details">
              <h3 className="title">{item.title}</h3>
              <p className="price">₹ {item.price}</p>
            </div>

            <button className="removeBtn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
