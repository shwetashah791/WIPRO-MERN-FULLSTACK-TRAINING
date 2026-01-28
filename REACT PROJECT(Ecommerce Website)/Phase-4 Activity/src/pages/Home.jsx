import { Link } from "react-router-dom";
import usePreventBack from "../hooks/usePreventback";
function Home() {
  usePreventBack(); // Prevent back navigation
  return (
    <div className="page">
      <div style={styles.hero}>
        <div style={styles.overlay}>
          <div style={styles.content}>
            <h1 style={styles.title}>Welcome to Eflyer</h1>
            <p style={styles.subtitle}>
              Discover the best products at amazing prices!
            </p>

            <Link to="/Signup">
              <button style={styles.button}>Signup</button>
            </Link>

            {/* LOGIN BUTTON */}
            <Link to="/login">
              <button style={styles.loginButton}>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    height: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600201319331-27d31ecd7850?w=1200&auto=format&fit=crop&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    textAlign: "center",
    color: "white",
    padding: "20px",
    borderRadius: "15px",
    backdropFilter: "blur(4px)",
  },
  title: {
    fontSize: "56px",
    marginBottom: "10px",
    textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
  },
  subtitle: {
    fontSize: "22px",
    marginBottom: "25px",
    textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
  },
  button: {
    padding: "15px 35px",
    border: "none",
    background: "linear-gradient(90deg, #0b3d91, #1a73e8)",
    color: "white",
    fontSize: "18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    marginRight: "15px",
  },

  // ✅ Login button style
  loginButton: {
    padding: "15px 35px",
    border: "none",
    background:"linear-gradient(90deg, #0b3d91, #1a73e8)", // orange gradient
    color: "white",
    fontSize: "18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Home;
