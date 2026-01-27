import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/categories?search=${search}`);
  };

  return (
    <div className="header">
      <Link to="/" className="logo">Eflyer</Link>

      <div className="searchBox">
        <input
          className="searchInput"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="cartBtn" onClick={handleSearch}>
          Search
        </button>
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
