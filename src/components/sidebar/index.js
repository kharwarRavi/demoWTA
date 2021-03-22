import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => (
  <div className="container sideBar">
    <NavLink
      className="navbarItem"
      activeClassName="is-active"
      to="/employees"
    >
      Employees
    </NavLink>
    <NavLink
      className="navbarItem"
      activeClassName="is-active"
      to="/organizations"
    >
      Organizations
    </NavLink>

    <NavLink className="navbarItem" activeClassName="is-active" to="/users">
      Users
    </NavLink>
    <NavLink className="navbarItem" activeClassName="is-active" to="/settings">
      Settings
    </NavLink>
  </div>
);

export default SideBar;
