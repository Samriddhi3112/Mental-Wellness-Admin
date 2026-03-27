// import { Outlet, Navigate } from "react-router-dom";

// const ProtectedRoutes = () => {
//   const token = localStorage.getItem("token");
//   const isGuest = localStorage.getItem("isGuest");

//   const isAuthenticated = token || isGuest;

//   return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
// };

// export default ProtectedRoutes;
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const isGuest = localStorage.getItem("isGuest");
  

  const isAuthenticated = !!token || !!isGuest;

  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;