import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CART_API = "http://localhost:3001/cart";

export default function Header() {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);

  const navigate = useNavigate();

  const isUser = localStorage.getItem("userLoggedIn");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const isAdmin = localStorage.getItem("adminLoggedIn");

  // Fetch cart count
  const fetchCartCount = async () => {
    try {
      const res = await fetch(CART_API);
      const data = await res.json();
      setCartCount(data.length); // default to length
    } catch (error) {
      console.error("Error fetching cart count", error);
    }
  };

  useEffect(() => {
    fetchCartCount();
  }, []);

  const handleSearch = () => {
    navigate(`/categories?search=${search}`);
  };

  const handleUserLogout = () => {
    localStorage.removeItem("userLoggedIn");
    alert("User logged out successfully!");
    navigate("/", { replace: true });
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    alert("Admin logged out successfully!");
    navigate("/", { replace: true });
  };

  return (
    <div className="header">
      {/* LOGO */}
      <Link to="/" className="logo">
        Eflyer
      </Link>

      {/* SEARCH BOX */}
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

      {/* NAV LINKS */}
      <div className="navLinks">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/categories" className="link">
          Categories
        </Link>
        <Link to="/cart" className="link">
          Cart ({cartCount})
        </Link>

        {/* ADMIN LOGIN / DROPDOWN */}
        {!isAdmin ? (
          <button className="adminBtn" onClick={() => navigate("/admin-login")}>
            Admin Login
          </button>
        ) : (
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              onClick={() => setShowAdminDropdown(!showAdminDropdown)}
            >
              Admin
            </button>
            {showAdminDropdown && (
              <div className="dropdown-menu show">
                <button className="dropdown-item" onClick={handleAdminLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* USER PROFILE DROPDOWN */}
        {isUser && (
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              onClick={() => setShowUserDropdown(!showUserDropdown)}
            >
              {userData?.name || "Profile"}
            </button>
            {showUserDropdown && (
              <div className="dropdown-menu show">
                <button
                  className="dropdown-item"
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Us
                </button>
                <button className="dropdown-item" onClick={handleUserLogout}>
                  Logout
                </button>
                
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
