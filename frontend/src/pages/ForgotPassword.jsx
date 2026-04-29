import { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://password-reset-3axg.onrender.com/api/auth/forgot-password",
        { email },
        { timeout: 30000  }, // 10 seconds
      );

      alert(res.data.message);
    } catch (err) {
      console.log(err);

      if (err.code === "ERR_NETWORK") {
        alert("Backend is not reachable (Render sleeping or down)");
      } else {
        alert(err.response?.data?.message || "Error");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="btn btn-primary">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
