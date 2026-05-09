// ============================================
// CONTENT COMPONENT
// File: src/components/layout/Content.jsx
// ============================================

import "../../styles/layout.css";

/**
 * Content — main scrollable area below the Header.
 *
 * Props:
 *   children  — page content
 *   title     — optional page title (shown inside content area)
 *   subtitle  — optional subtitle
 *   actions   — optional JSX rendered next to the title (buttons, etc.)
 */
const Content = ({ children, title, subtitle, actions }) => {
  return (
    <main className="content">
      <div className="content__inner">
        {/* Optional page header */}
        {title && (
          <div className="content__page-header">
            <div>
              <h1 className="content__page-title">{title}</h1>
              {subtitle && (
                <p className="content__page-subtitle">{subtitle}</p>
              )}
            </div>
            {actions && <div>{actions}</div>}
          </div>
        )}

        {/* Page content */}
        {children}
      </div>
    </main>
  );
};

export default Content;