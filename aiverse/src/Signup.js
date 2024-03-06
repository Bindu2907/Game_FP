import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = () => {
    setError('');
    setSuccess('');

    // Example validation - you can add your own validation logic here
    if (!email || !password || !confirmPassword || !name) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Simulate asynchronous signup process
    setTimeout(() => {
      // Simulate successful signup
      if (Math.random() < 0.8) {
        setSuccess('Signup successful!');
        setError('');
        // Reset form fields after successful signup
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setName('');
        setProfilePic('');
        setTermsAgreed(false);
      } else {
        // Simulate signup failure
        setError('Signup failed. Please try again.');
        setSuccess('');
      }
    }, 1000); // Simulate 1 second delay
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setProfilePic(e.target.files[0])}
      />
      <label>
        <input
          type="checkbox"
          checked={termsAgreed}
          onChange={(e) => setTermsAgreed(e.target.checked)}
        />
        I agree to the terms and conditions
      </label>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
