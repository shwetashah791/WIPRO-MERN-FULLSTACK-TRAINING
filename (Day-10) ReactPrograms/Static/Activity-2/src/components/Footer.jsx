import React from "react";

function Footer() {
  const footerStyle = {
    textAlign: "center",
    padding: "30px 20px",
    backgroundColor: "#0b3d91",
    color: "white",
    width: "100%",
    marginTop: "auto",
  };

  return (
    <footer style={footerStyle}>
      {/* Company Name */}
      <h3 style={{ margin: "10px 0" }}>Eflyer</h3>

      {/* Contact Info */}
      <p style={{ margin: "8px 0" }}>
        📍 123 Main Street, City, Country | ✉️ info@eflyer.com | 📞 +123 456 7890
      </p>

      {/* Social Links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", margin: "10px 0" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Facebook</a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Instagram</a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Twitter</a>
      </div>

      {/* Copyright */}
      <p style={{ marginTop: "15px", fontSize: "14px" }}>
        © 2026 Eflyer | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
