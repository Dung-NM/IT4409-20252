// ============================================
// MAIN LAYOUT COMPONENT
// File: src/components/layout/MainLayout.jsx
// ============================================

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../../styles/layout.css";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="main-layout">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay visible"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Main body */}
      <div className="main-layout__body">
        {/* Sticky header */}
        <Header onMenuToggle={toggleSidebar} />

        {/* Routed page */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;