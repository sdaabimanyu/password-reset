import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `https://password-reset-4.onrender.com/api/auth/reset-password/${token}`,
        { password }
      );

      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-success">Reset Password</button>

        <p className="mt-3">
        Login <Link to="/">Login</Link>
      </p>
      </form>
    </div>
  );
}

export default ResetPassword;