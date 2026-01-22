import { useEffect, useState } from "react";

const CART_API = "http://localhost:3001/cart";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(CART_API)
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);

  const removeItem = (id) => {
    fetch(`${CART_API}/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => {
        setCart(cart.filter(item => item.id !== id));
      });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              style={{
                padding: "8px 12px",
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
