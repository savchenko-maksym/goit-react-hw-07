import { NavLink } from "react-router";
import s from "./Navigation.module.css";
import clsx from "clsx";

const setActiveClass = ({ isActive }) => {
  return clsx(s.headerLink, isActive && s.active);
};

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      <NavLink className={setActiveClass} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};
export default Navigation;
