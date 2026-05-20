import { Link } from "react-router-dom";
import { RiErrorWarningLine, RiArrowLeftLine } from "react-icons/ri";

const NotFoundPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "var(--auth-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "fixed",
          top: "-35%",
          right: "-15%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(124,140,248,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "fixed",
          bottom: "-25%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "var(--auth-card-bg)",
          border: "1px solid var(--auth-card-border)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          padding: "48px 40px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "64px",
            height: "64px",
            margin: "0 auto 24px",
            borderRadius: "9999px",
            background: "rgba(124,140,248,0.12)",
            color: "var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RiErrorWarningLine size={28} />
        </div>

        {/* 404 */}
        <div
          style={{
            fontSize: "5rem",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.06em",
            color: "var(--content-text)",
            marginBottom: "12px",
          }}
        >
          404
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "var(--text-xl)",
            fontWeight: "var(--weight-bold)",
            color: "var(--content-text)",
            marginBottom: "12px",
          }}
        >
          Page not found
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "var(--text-sm)",
            lineHeight: "var(--leading-normal)",
            color: "var(--content-text-muted)",
            marginBottom: "32px",
          }}
        >
          The page you are looking for does not exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          to="/dashboard"
          style={{
            height: "44px",
            padding: "0 20px",
            borderRadius: "var(--radius-md)",
            background: "var(--accent)",
            color: "#fff",
            fontSize: "var(--text-sm)",
            fontWeight: "var(--weight-semibold)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            textDecoration: "none",
            transition: "0.2s ease",
          }}
        >
          <RiArrowLeftLine size={18} />
          Back to dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;