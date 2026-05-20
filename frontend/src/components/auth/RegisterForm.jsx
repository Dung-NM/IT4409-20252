// ============================================
// REGISTER FORM COMPONENT
// File: src/components/auth/RegisterForm.jsx
//
// Logic: giữ nguyên flow gốc
//   - authApi.register({ username, password })
//   - navigate("/login") sau khi thành công
// ============================================

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  RiUserLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiArrowRightLine,
  RiErrorWarningLine,
} from "react-icons/ri";

import { authApi } from "../../api/authApi";
import "../../styles/auth.css";

// ── Component ──────────────────────────────────

const RegisterForm = () => {
  // ── State (giữ nguyên như cũ) ──────────────
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ── State UI thêm ──────────────────────────
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ── Submit handler (logic giữ nguyên) ──────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authApi.register({ username, password });

      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(
        err?.response?.data?.message || "Registration failed. Please try again."
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
        <label className="auth-field__label" htmlFor="reg-username">
          Username
        </label>
        <div className="auth-field__input-wrap">
          <span className="auth-field__input-icon">
            <RiUserLine size={16} />
          </span>
          <input
            id="reg-username"
            className="auth-field__input"
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => {
              setError("");
              setUsername(e.target.value);
            }}
            autoComplete="username"
            autoFocus
            required
          />
        </div>
      </div>

      {/* Password */}
      <div className="auth-field">
        <label className="auth-field__label" htmlFor="reg-password">
          Password
        </label>
        <div className="auth-field__input-wrap">
          <span className="auth-field__input-icon">
            <RiLockLine size={16} />
          </span>
          <input
            id="reg-password"
            className="auth-field__input has-toggle"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            value={password}
            onChange={(e) => {
              setError("");
              setPassword(e.target.value);
            }}
            autoComplete="new-password"
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
            Creating account…
          </>
        ) : (
          <>
            Create account
            <RiArrowRightLine size={16} />
          </>
        )}
      </button>
    </form>
  );
};

export default RegisterForm;