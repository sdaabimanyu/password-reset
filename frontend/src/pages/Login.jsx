import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://password-reset-3axg.onrender.com/api/auth/login",
        {
          email,
          password,
        },
      );

      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };
  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex items-center gap-x-5  mt-3">
          <button className="btn btn-success">Login</button>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>

      <p className="mt-3">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
