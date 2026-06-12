import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const authuser = useSelector(
    (state) => state.userAuth?.user
  );

  if (!authuser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;