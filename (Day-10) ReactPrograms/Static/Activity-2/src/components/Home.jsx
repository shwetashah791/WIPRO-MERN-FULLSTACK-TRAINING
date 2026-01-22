import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600201319331-27d31ecd7850?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvbW1lcmNlJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
      }}
    >
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "52px", marginBottom: "10px" }}>
          Welcome to Eflyer
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "20px" }}>
          Discover the best products at amazing prices!
        </p>

        <Link to="/products">
          <button
            style={{
              padding: "15px 30px",
              border: "none",
              backgroundColor: "#0b3d91",
              color: "white",
              fontSize: "18px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
