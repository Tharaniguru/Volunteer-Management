// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

 function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var navigate=useNavigate();

  var Login = async(event) => {
    event.preventDefault();
    var req =await axios.post("hhtp://localhost:3001/login",{
        email:email,
        password:password
    })
    console.log(req);
    navigate("/")
    // Add your login logic here (e.g., API call)
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={Login}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
