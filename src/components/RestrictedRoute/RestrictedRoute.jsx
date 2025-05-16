import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  const isLoggedin = useSelector(selectIsLoggedIn);

  if (isLoggedin) {
    return <Navigate to={redirectTo} />;
  }

  return component;
};
export default RestrictedRoute;
