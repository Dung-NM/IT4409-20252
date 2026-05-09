// ============================================
// SIDEBAR COMPONENT
// File: src/components/layout/Sidebar.jsx
// ============================================

import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  RiTaskLine,
  RiTeamLine,
  RiCalendarLine,
  RiSettings3Line,
  RiInboxLine,
  RiFileList2Line,
  RiBarChartLine,
  RiLogoutBoxLine,
  RiCloseLine,
  RiCheckboxMultipleLine,
} from "react-icons/ri";
import { AuthContext } from "../../contexts/AuthContext";
import "../../styles/layout.css";

// ── Nav data ──────────────────────────────────

const NAV_MAIN = [
  {
    label: "My Tasks",
    icon: <RiTaskLine size={17} />,
    to: "/tasks",
    badge: null,
  },
  {
    label: "Inbox",
    icon: <RiInboxLine size={17} />,
    to: "/inbox",
    badge: null,
  },
  {
    label: "Calendar",
    icon: <RiCalendarLine size={17} />,
    to: "/calendar",
    badge: null,
  },
];

const NAV_WORKSPACE = [
  {
    label: "Projects",
    icon: <RiFileList2Line size={17} />,
    to: "/projects",
    badge: null,
  },
  {
    label: "Team",
    icon: <RiTeamLine size={17} />,
    to: "/team",
    badge: null,
  },
  {
    label: "Reports",
    icon: <RiBarChartLine size={17} />,
    to: "/reports",
    badge: null,
  },
];

const NAV_BOTTOM = [
  {
    label: "Settings",
    icon: <RiSettings3Line size={17} />,
    to: "/settings",
  },
];

// ── Helpers ────────────────────────────────────

function getInitials(name = "") {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// ── Component ──────────────────────────────────

const Sidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const NavItem = ({ item }) => (
    <NavLink
      to={item.to}
      end={item.to === "/"}
      className={({ isActive }) =>
        `sidebar__item ${isActive ? "active" : ""}`
      }
      onClick={onClose}
    >
      <span className="sidebar__item-icon">{item.icon}</span>
      <span className="sidebar__item-label">{item.label}</span>
      {item.badge && (
        <span className="sidebar__item-badge">{item.badge}</span>
      )}
    </NavLink>
  );

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Logo */}
      <div className="sidebar__logo">
        <div className="sidebar__logo-icon">
          <RiCheckboxMultipleLine size={17} color="#fff" />
        </div>
        <span className="sidebar__logo-text">TaskFlow</span>
        <span className="sidebar__logo-badge">Beta</span>
      </div>

      {/* Close button (mobile) */}
      <button
        className="sidebar__close-btn"
        onClick={onClose}
        aria-label="Close sidebar"
      >
        <RiCloseLine size={16} />
      </button>

      {/* Navigation */}
      <nav className="sidebar__nav dark-scroll">
        {/* Main */}
        <div className="sidebar__section">
          <span className="sidebar__section-label">Menu</span>
          {NAV_MAIN.map((item) => (
            <NavItem key={item.to} item={item} />
          ))}
        </div>

        {/* Workspace */}
        <div className="sidebar__section">
          <span className="sidebar__section-label">Workspace</span>
          {NAV_WORKSPACE.map((item) => (
            <NavItem key={item.to} item={item} />
          ))}
        </div>

        {/* Settings */}
        <div className="sidebar__section">
          {NAV_BOTTOM.map((item) => (
            <NavItem key={item.to} item={item} />
          ))}
        </div>
      </nav>

      {/* Footer: User + Logout */}
      <div className="sidebar__footer">
        <div className="sidebar__user">
          <div className="sidebar__user-avatar">
            {getInitials(user?.username || user?.name || "U")}
          </div>
          <div className="sidebar__user-info">
            <div className="sidebar__user-name truncate">
              {user?.username || user?.name || "User"}
            </div>
            <div className="sidebar__user-role truncate">
              {user?.role || "Member"}
            </div>
          </div>
          <button
            className="sidebar__user-action"
            onClick={handleLogout}
            title="Logout"
            aria-label="Logout"
          >
            <RiLogoutBoxLine size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;