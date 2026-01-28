import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePreventBack from "../hooks/usePreventback";

const CART_API = "http://localhost:3001/cart";

function Cart() {
   usePreventBack(); // Prevent back navigation
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const res = await fetch(CART_API);
    const data = await res.json();

    // ensure qty exists and is number
    const updated = data.map((item) => ({
      ...item,
      qty: Number(item.qty) || 1,  // if qty is missing -> 1
      price: Number(item.price) || 0
    }));

    setCart(updated);
  };

  const updateQty = async (item, change) => {
    const newQty = Number(item.qty) + change;

    if (newQty <= 0) {
      await fetch(`${CART_API}/${item.id}`, { method: "DELETE" });
    } else {
      await fetch(`${CART_API}/${item.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ qty: newQty }),
      });
    }

    fetchCart();
  };

  const totalPrice = cart.reduce((sum, item) => {
    return sum + Number(item.price) * Number(item.qty);
  }, 0);

  const handleCheckout = () => {
    navigate("/payment", { state: { total: totalPrice } });
  };

  return (
    <div className="page">
      <h2 className="heading">🛒 My Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cardCart">
              <img src={item.img} alt={item.title} className="imageCart" />

              <div className="details">
                <h3 className="title">{item.title}</h3>

                {/* Quantity Controls */}
                <div className="qtyControls">
                  <button
                    className="qtyBtn"
                    onClick={() => updateQty(item, -1)}
                  >
                    -
                  </button>

                  <span className="qtyValue">{Number(item.qty)}</span>

                  <button
                    className="qtyBtn"
                    onClick={() => updateQty(item, +1)}
                  >
                    +
                  </button>
                </div>

                {/* Product Total */}
                <p className="price">
                  ₹ {Number(item.price)} x {Number(item.qty)} = ₹{" "}
                  {Number(item.price) * Number(item.qty)}
                </p>
              </div>
            </div>
          ))}

          {/* Total Amount */}
          <div className="totalContainer">
            <h3 className="totalLabel">Total Amount:</h3>
            <h3 className="totalAmount">₹ {totalPrice}</h3>
          </div>

          {/* Checkout Button */}
          <button className="checkoutBtn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
