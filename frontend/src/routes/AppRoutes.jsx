import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* redirect root */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* auth pages */}
        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        {/* protected pages */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;