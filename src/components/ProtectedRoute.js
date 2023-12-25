import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  return user.uid ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
