import { useState } from 'react';
import axios from '../api/axios';
import { saveToken } from '../utils/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'official',
  });

  const navigate = useNavigate();

  const register = async () => {
    try {
      const res = await axios.post('./auth/signup', form);
      saveToken(res.data.token);
      navigate('/dashboard');
    } catch {
      alert('Signup failed. Please check your input.');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-primary text-white position-relative overflow-hidden">
      {/* Background image */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-n1">
        <img
          src="/signup-bg.jpg"
          className="w-100 h-100 object-fit-cover opacity-50 position-absolute"
          alt="background"
        />
      </div>

      {/* Signup form */}
      <div className="text-dark w-100" style={{ maxWidth: '450px', zIndex: 1 }}>
        <div className="card shadow-lg p-5 bg-white">
          <h2 className="mb-4 text-center text-primary fw-bold">Welcome To The Family</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="form-control mb-3"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <select
            className="form-select mb-4"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="official">Official</option>
            <option value="clergy">Clergy</option>
          </select>
          <button onClick={register} className="btn btn-primary w-100 fw-semibold">
            Sign Up
          </button>
        </div>

        {/* Existing user prompt */}
        <div className="text-center mt-3">
          <p className="text-white">
            Already have an account?
            <Link to="/login" className="text-warning fw-semibold text-decoration-none ms-2">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
