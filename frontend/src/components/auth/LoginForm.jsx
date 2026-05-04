// ============================================
// LOGIN FORM COMPONENT
// File: src/components/auth/LoginForm.jsx
//
// Logic: giữ nguyên flow gốc
//   - authApi.login({ username, password })
//   - destructure res.data.data → { user, accessToken }
//   - login(user, accessToken) từ AuthContext
//   - navigate("/")
// ============================================

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {
  RiAccountCircleLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiArrowRightLine,
  RiErrorWarningLine,
} from "react-icons/ri";

import { AuthContext } from "../../contexts/AuthContext";
import { authApi } from "../../api/authApi";
import "../../styles/auth.css";

const LoginForm = () => {
  // ── State (giữ nguyên như cũ) ──────────────
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  // ── State UI thêm ──────────────────────────
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // ── Submit handler (logic giữ nguyên) ──────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await authApi.login({ username, password });

      const { user, accessToken } = res.data.data;

      login(user, accessToken);

      navigate("/tasks");
    } catch (err) {
      console.log(err);
      setError(
        err?.response?.data?.message || "Invalid username or password."
      );
    } finally {
      setLoading(false);
    }
  };

  // ── Render ─────────────────────────────────
  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      {/* Error alert */}
      {error && (
        <div className="auth-alert auth-alert--error" role="alert">
          <RiErrorWarningLine size={16} style={{ flexShrink: 0 }} />
          <span>{error}</span>
        </div>
      )}

      {/* Username */}
      <div className="auth-field">
        <label className="auth-field__label" htmlFor="login-username">
          Username
        </label>
        <div className="auth-field__input-wrap">
          <span className="auth-field__input-icon">
            <RiAccountCircleLine size={16} />
          </span>
          <input
            id="login-username"
            className="auth-field__input"
            type="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => {
              setError("");
              setusername(e.target.value);
            }}
            autoComplete="username"
            autoFocus
            required
          />
        </div>
      </div>

      {/* Password */}
      <div className="auth-field">
        <label className="auth-field__label" htmlFor="login-password">
          Password
        </label>
        <div className="auth-field__input-wrap">
          <span className="auth-field__input-icon">
            <RiLockLine size={16} />
          </span>
          <input
            id="login-password"
            className="auth-field__input"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setError("");
              setPassword(e.target.value);
            }}
            autoComplete="current-password"
            required
          />
          <button
            type="button"
            className="auth-field__toggle"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <RiEyeOffLine size={16} /> : <RiEyeLine size={16} />}
          </button>
        </div>
      </div>

      {/* Submit */}
      <button type="submit" className="auth-submit" disabled={loading}>
        {loading ? (
          <>
            <span className="auth-spinner" />
            Signing in…
          </>
        ) : (
          <>
            Sign in
            <RiArrowRightLine size={16} />
          </>
        )}
      </button>
    </form>
  );
};

export default LoginForm;