import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");

  return (
    <div className="header">
      <div>
        <Link to="/" className="logo">Eflyer</Link>
      </div>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchInput"
        />
      </div>

      <div className="navLinks">
        <Link to="/" className="link">Home</Link>
        <Link to="/categories" className="link">Categories</Link>
        <Link to="/cart" className="link">Cart</Link>
      </div>
    </div>
  );
}

export default Header;
