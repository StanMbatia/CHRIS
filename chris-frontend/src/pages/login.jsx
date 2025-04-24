import { useState } from 'react';
import axios from '../api/axios';
import { saveToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post('./auth/login', { email, password });
      saveToken(res.data.token);
      navigate('/dashboard');
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '400px' }}>
      <div className="card shadow-sm h-100 transition shadow-sm hover-shadow-lg border border-0">
        <h2 className="mb-4 text-center text-primary">Login to CHRIS</h2>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login} className="btn btn-primary w-100">
          Login
        </button>
      </div>
    </div>
    </div>
  );
}
