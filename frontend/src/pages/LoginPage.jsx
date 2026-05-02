// ============================================
// LOGIN PAGE
// File: src/pages/LoginPage.jsx
// ============================================

import { Link } from "react-router-dom";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import LoginForm from "../components/auth/LoginForm";
import "../styles/auth.css";

const LoginPage = () => {
  return (
    <div className="auth-page">
      {/* ── Left branding panel ─────────────────── */}
      <div className="auth-panel">
        {/* Logo */}
        <div className="auth-panel__logo">
          <div className="auth-panel__logo-icon">
            <RiCheckboxMultipleLine size={20} color="#fff" />
          </div>
          <span className="auth-panel__logo-text">TaskFlow</span>
        </div>

        {/* Main copy */}
        <div className="auth-panel__content">
          <div className="auth-panel__tag">
            <span style={{ width: 6, height: 6, background: "currentColor", borderRadius: "50%", display: "inline-block" }} />
            Task Management
          </div>
          <h1 className="auth-panel__heading">
            Work smarter,<br />
            ship <span>faster.</span>
          </h1>
          <p className="auth-panel__desc">
            Organize your team's work, track progress, and hit deadlines —
            all in one clean workspace.
          </p>
        </div>

        {/* Footer */}
        <div className="auth-panel__footer">
          © {new Date().getFullYear()} TaskFlow. All rights reserved.
        </div>
      </div>

      {/* ── Right form side ─────────────────────── */}
      <div className="auth-form-side">
        <div className="auth-card">
          {/* Card header */}
          <div className="auth-card__header">
            <div className="auth-card__logo">
              <div className="auth-card__logo-icon">
                <RiCheckboxMultipleLine size={16} color="#fff" />
              </div>
              <span className="auth-card__logo-text">TaskFlow</span>
            </div>
            <h2 className="auth-card__title">Welcome back</h2>
            <p className="auth-card__subtitle">
              Sign in to your workspace and pick up right where you left off.
            </p>
          </div>

          {/* Form */}
          <LoginForm />

          {/* Footer */}
          <p className="auth-card__footer">
            Don't have an account?{" "}
            <Link to="/register">Create one free</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;