import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const token = await response.text();
        onLogin(token);
        history.push('/gameplay'); // Redirect to the GamePlay screen
      } else {
        // Handle login error
        console.error('Login failed:', response.status);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login Screen</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginScreen;
