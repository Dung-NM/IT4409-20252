// ============================================
// HEADER COMPONENT
// File: src/components/layout/Header.jsx
// ============================================

import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  RiMenuLine,
  RiSearchLine,
  RiBellLine,
  RiQuestionLine,
} from "react-icons/ri";
import { AuthContext } from "../../contexts/AuthContext";
import "../../styles/layout.css";

// ── Breadcrumb map ─────────────────────────────

const PAGE_LABELS = {
  "/dashboard": "Dashboard",
  "/tasks": "Tasks",
  "/inbox": "Inbox",
  "/calendar": "Calendar",
  "/projects": "Projects",
  "/team": "Team",
  "/reports": "Reports",
  "/settings": "Settings",
};

function getInitials(name = "") {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// ── Component ──────────────────────────────────

const Header = ({ onMenuToggle }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [searchFocus, setSearchFocus] = useState(false);

  const pageName = PAGE_LABELS[location.pathname] || "TaskFlow";

  return (
    <header className="header">
      {/* Mobile menu toggle */}
      <button
        className="header__menu-btn"
        onClick={onMenuToggle}
        aria-label="Toggle sidebar"
      >
        <RiMenuLine size={20} />
      </button>

      {/* Breadcrumb */}
      <div className="header__breadcrumb">
        <span className="header__breadcrumb-item">TaskFlow</span>
        <span className="header__breadcrumb-sep">›</span>
        <span className="header__breadcrumb-item current">{pageName}</span>
      </div>

      {/* Search */}
      <div
        className="header__search"
        onClick={() =>
          document.querySelector(".header__search input")?.focus()
        }
      >
        <RiSearchLine size={15} className="header__search-icon" />
        <input
          type="text"
          placeholder="Search…"
          aria-label="Search"
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
        />
        {!searchFocus && (
          <span className="header__search-kbd">⌘K</span>
        )}
      </div>

      {/* Actions */}
      <div className="header__actions">
        {/* Notifications */}
        <button
          className="header__btn"
          title="Notifications"
          aria-label="Notifications"
        >
          <RiBellLine size={18} />
          <span className="header__btn-dot" />
        </button>

        {/* Help */}
        <button
          className="header__btn"
          title="Help"
          aria-label="Help"
        >
          <RiQuestionLine size={18} />
        </button>

        <span className="header__divider" />

        {/* Avatar */}
        <div
          className="header__avatar"
          title={user?.username || "Profile"}
          role="button"
          tabIndex={0}
          aria-label="User profile"
        >
          {getInitials(user?.username || user?.name || "U")}
        </div>
      </div>
    </header>
  );
};

export default Header;