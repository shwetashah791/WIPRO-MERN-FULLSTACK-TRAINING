import { useEffect, useState } from "react";

const CART_API = "http://localhost:3001/cart";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const res = await fetch(CART_API);
    const data = await res.json();
    setCart(data);
  };

  const updateQuantity = async (id, qty) => {
    const product = cart.find((item) => item.id === id);
    if (!product) return;

    const newQty = product.qty + qty;

    // If quantity becomes 0 or less => delete item
    if (newQty < 1) {
      await fetch(`${CART_API}/${id}`, { method: "DELETE" });
      fetchCart();
      return;
    }

    // Update quantity normally
    await fetch(`${CART_API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ qty: newQty }),
    });

    fetchCart();
  };

  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);

  return (
    <div className="page">
      <h2 className="heading">🛒 My Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cardCart">
              <img
                src={item.img || item.image || "https://via.placeholder.com/120"}
                alt={item.title}
                className="imageCart"
              />

              <div className="details">
                <h3 className="title">{item.title}</h3>

                {/* Price for each product */}
                <p className="price">
                  ₹ {item.price} x {item.qty} = ₹ {item.price * item.qty}
                </p>

                {/* Quantity buttons */}
                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <button
                    className="cartBtn"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>

                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {item.qty}
                  </span>

                  <button
                    className="cartBtn"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
            Total: ₹ {totalPrice}
          </h3>
        </>
      )}
    </div>
  );
}

export default Cart;
