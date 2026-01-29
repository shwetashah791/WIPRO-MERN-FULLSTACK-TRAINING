import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 60px",
        background: "#111",
        color: "white",
         gap: "250px",
      }}
    >
      {/* LOGO */}
      <div>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "24px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Eflyer
        </Link>
      </div>

      {/* SEARCH BAR */}
      <div>
        
        <input
        
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "none",
            width: "250px",
          }}
        />
      </div>

      {/* NAV LINKS */}
      <div
        style={{
          display: "flex",
          gap: "35px",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>
        <Link to="/categories" style={{ color: "white", textDecoration: "none" }}>
          Categories
        </Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Header;
