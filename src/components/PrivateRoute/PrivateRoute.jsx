import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";
import toast from "react-hot-toast";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const isLoggedin = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedin) {
      toast("Please log in to use the application.", { id: "toast-one" });
    }
  }, [isLoggedin]);

  if (!isLoggedin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
