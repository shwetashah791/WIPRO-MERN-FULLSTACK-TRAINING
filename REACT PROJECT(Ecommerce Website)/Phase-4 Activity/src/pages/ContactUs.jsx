import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("❌ Please fill in all fields before sending.");
      return;
    }

    alert("✅ Message sent!");
    
    // Optionally reset the form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="page">
      <h2 className="heading" style={{ color: "#0b3d91" }}>
        📩 Contact Us
      </h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="input"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="input"
          style={{ height: "120px" }}
        />
        <button type="submit" className="addBtn">
          Send Message
        </button>
      </form>
    </div>
  );
}
