import { Navigate } from "react-router-dom";

export default function withAdminAuth(Component) {
  return function Wrapped(props) {
    const isAdmin = localStorage.getItem("adminLoggedIn");

    if (!isAdmin) {
      return <Navigate to="/admin-login" replace />;
    }
    return <Component {...props} />;
  };
}
