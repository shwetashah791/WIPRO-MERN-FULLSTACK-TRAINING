import React from 'react';

function AboutUs() {
  return (
    <div
      style={{
        backgroundColor: '#f5f7fa',
        minHeight: '100vh',
        padding: '40px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '10px',
          maxWidth: '800px',
          margin: 'auto',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}
      >
        <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>
          About Us
        </h1>

        <p
          style={{
            color: '#555',
            fontSize: '18px',
            lineHeight: '1.6'
          }}
        >
          Welcome to our website! We are dedicated to providing the best service
          and creating amazing web experiences. Our team focuses on quality,
          innovation, and customer satisfaction.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
