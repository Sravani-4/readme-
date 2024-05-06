"use client"
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signin', { username, password });
      setMessage(response.data.token);
      console.log(response.data)
    } catch (error: any) { // Assertion here
      setMessage(error.response.data.message);
    }
  };

  return (
    <div  style={{ color: 'black' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
       <button 
          type="submit" 
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Login
        </button>

      </form>
      {message && <p style={{
           
            color: 'white',
        
          }}>{message}</p>}
    </div>
  );
};

export default Login;
