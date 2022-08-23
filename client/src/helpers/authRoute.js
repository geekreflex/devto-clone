import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ auth, children }) => {
  return auth ? <Navigate to="/" replace /> : children;
};

export const ProtectedRoute = ({ auth, children }) => {
  return auth ? children : <Navigate to="/enter" replace />;
};
