import React, { useState } from 'react';
import './login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = () => {
    setError('');

    // Basic form validation
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    // Simulate login logic (replace with actual authentication)
    if (email === 'example@example.com' && password === 'password') {
      if (rememberMe) {
        localStorage.setItem('rememberedUser', email);
      } else {
        localStorage.removeItem('rememberedUser');
      }
      console.log('Logged in successfully');
      setSuccess('Login successful!');
      setError('');
    } else {
      setError('Invalid email or password');
      setSuccess('');
    }
  };

  return (
    <div>
    <div>
      <h2>Login</h2>
      <label>
      Enter the Email:
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </label>
      </div>
      <br></br>
      <div>
      <label>
      Enter Password:
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </label>
      </div>
      <br/>
      <div>
      <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        Remember Me
      </label>
      </div>
      <br/>
      <div>
      <button onClick={handleLogin}>Login</button>
      </div>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      
    </div>
  );
};

export default Login;
