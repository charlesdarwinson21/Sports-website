import React from 'react';

const LoginRegister = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    margin: '50px auto',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const formSectionStyle = {
    width: '45%',
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f0f3f8',
  };

  const inputStyle = {
    width: '80%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '85%',
    padding: '12px',
    backgroundColor: '#249beb',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#1a7fc8',
  };

  const dividerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    padding: '20px',
    color: '#999',
  };

  return (
    <div style={containerStyle}>
      <div style={formSectionStyle}>
        <h1>
          Welcome to <span style={{ color: '#249beb' }}>Sportify</span>
        </h1>
        <h2>Create your account</h2>
        <form className="register-form">
          <input type="text" placeholder="Full Name" required style={inputStyle} />
          <input type="email" placeholder="Email" required style={inputStyle} />
          <input type="password" placeholder="Password" required style={inputStyle} />
          <button type="submit" style={buttonStyle}>
            Create My Account
          </button>
        </form>
      </div>
      <div style={dividerStyle}>or</div>
      <div style={formSectionStyle}>
        <h2>Login your account</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" required style={inputStyle} />
          <input type="password" placeholder="Password" required style={inputStyle} />
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;