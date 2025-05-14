import clsx from "clsx";
import { NavLink } from "react-router";
import s from "./AuthNav.module.css";

const isActiveClass = ({ isActive }) => {
  return clsx(s.headerLink, isActive && s.active);
};

const AuthNav = () => {
  return (
    <div className={s.wrap}>
      <NavLink className={isActiveClass} to="/register">
        Register
      </NavLink>
      <NavLink className={isActiveClass} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
