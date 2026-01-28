import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <h3 style={{ margin: "1px 0", fontSize: "18px" }}>Eflyer</h3>
      <p style={{ margin: "1px 0", fontSize: "10px", color: "#e8f0ff" }}>
        📍 123 Main Street, City, Country | ✉️ info@eflyer.com | 📞 +91 9845607890
      </p>

      <div className="iconStyle">
        <a href="#" className="linkStyle">👍 Facebook</a>
        <a href="#" className="linkStyle">📸 Instagram</a>
        <a href="#" className="linkStyle">🐦 Twitter</a>
      </div>

      <p style={{ marginTop: "15px", fontSize: "14px", color: "#dfe9ff" }}>
        © 2026 Eflyer | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
