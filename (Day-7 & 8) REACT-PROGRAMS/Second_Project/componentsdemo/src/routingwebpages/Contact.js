import React from 'react';

function ContactUs() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#eef2f7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '12px',
          width: '70%',
          maxWidth: '700px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '30px'
          }}
        >
          Contact Us
        </h1>

        <p style={{ fontSize: '18px', color: '#555', marginBottom: '15px' }}>
          📞 <strong>Phone:</strong> +91 1234567890
        </p>

        <p style={{ fontSize: '18px', color: '#555', marginBottom: '15px' }}>
          📧 <strong>Email:</strong> contact@example.com
        </p>

        <p style={{ fontSize: '18px', color: '#555' }}>
          🏢 <strong>Address:</strong> 123, City, Country
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
