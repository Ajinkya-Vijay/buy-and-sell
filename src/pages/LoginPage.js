import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import productsImage from '../assests/images/hand-drawn-pantry.avif'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export default function LoginPage()  {
  const [input, setInput] = useState('');
  const { loginWithRedirect } = useAuth0();

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`OTP requested for: ${input}`);
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <div style={styles.loginLeft}>
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
          <img
            src={productsImage}
            alt="login visual"
            style={{marginLeft: '76px', borderRadius: '12px' , width: '163px'}}
          />
        </div>

        <div style={styles.loginRight}>
          <form onSubmit={handleSubmit}>
            <Button variant="outlined" onClick={() => loginWithRedirect()}>
              Click here to Log In
            </Button>
            <p style={styles.terms}>
              By continuing, you agree to Flipkart's{' '}
              <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    backgroundColor: '#f1f3f6',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    backgroundColor: 'white',
    display: 'flex',
    width: '750px',
    minHeight: '400px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  loginLeft: {
    backgroundColor: '#2874f0',
    color: 'white',
    flex: 1,
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: '10px',
  },
  leftText: {
    fontSize: '14px',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  loginImage: {
    maxWidth: '100%',
    marginTop: 'auto',
  },
  loginRight: {
    flex: 1,
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderBottom: '1px solid #ccc',
    marginBottom: '20px',
    fontSize: '16px',
  },
  terms: {
    fontSize: '12px',
    color: '#878787',
    marginBottom: '20px',
  },
  termsLink: {
    color: '#2874f0',
    textDecoration: 'none',
  },
  otpBtn: {
    backgroundColor: '#fb641b',
    color: 'white',
    border: 'none',
    padding: '12px',
    width: '100%',
    fontSize: '16px',
    cursor: 'pointer',
  },
  createAccount: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
  },
  createAccountLink: {
    color: '#2874f0',
    fontWeight: 500,
    textDecoration: 'none',
  },
};
