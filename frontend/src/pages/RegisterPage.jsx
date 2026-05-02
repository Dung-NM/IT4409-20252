// ============================================
// REGISTER PAGE
// File: src/pages/RegisterPage.jsx
// ============================================

import { Link } from "react-router-dom";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import RegisterForm from "../components/auth/RegisterForm";
import "../styles/auth.css";

const FEATURES = [
  { text: "Free forever for small teams" },
  { text: "No credit card required" },
  { text: "Set up in under 2 minutes" },
];

const RegisterPage = () => {
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
            <span
              style={{
                width: 6,
                height: 6,
                background: "currentColor",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            Get started free
          </div>
          <h1 className="auth-panel__heading">
            Your team's<br />
            new <span>command center.</span>
          </h1>
          <p className="auth-panel__desc">
            Join thousands of teams who use TaskFlow to stay aligned, move
            faster, and get more done every day.
          </p>

          <div className="auth-panel__features">
            {FEATURES.map((f) => (
              <div key={f.text} className="auth-panel__feature">
                <span className="auth-panel__feature-dot" />
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-5) var(--space-6)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--sidebar-text)",
              lineHeight: "var(--leading-normal)",
              marginBottom: "var(--space-4)",
              fontStyle: "italic",
            }}
          >
            "TaskFlow completely transformed how our team collaborates.
            We ship twice as fast now."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--accent), #a78bfa)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              AN
            </div>
            <div>
              <div style={{ fontSize: "var(--text-sm)", color: "#fff", fontWeight: 500 }}>
                Alex Nguyen
              </div>
              <div style={{ fontSize: "var(--text-xs)", color: "var(--sidebar-text)" }}>
                CTO at BuildCo
              </div>
            </div>
          </div>
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
            <h2 className="auth-card__title">Create your account</h2>
            <p className="auth-card__subtitle">
              Get started for free. No credit card required.
            </p>
          </div>

          {/* Form */}
          <RegisterForm />

          {/* Footer */}
          <p className="auth-card__footer">
            Already have an account?{" "}
            <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;