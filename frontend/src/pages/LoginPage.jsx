
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', { username, password });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      alert('登录失败，请检查用户名或密码');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>登录</h2>
      <img src="/assets/logo-horizontal.png" alt="Logo" style={{ width: "80%", marginBottom: "1rem" }} />
        <form onSubmit={login}>
          <div className="form-group">
            <label>用户名</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label>密码</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button className="btn btn-primary" type="submit">登录</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;