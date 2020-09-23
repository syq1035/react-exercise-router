import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" activeClassName="nav-active" className="nav-item">
        Home
      </NavLink>
      <NavLink to="/products" activeClassName="nav-active" className="nav-item">
        products
      </NavLink>
      <NavLink
        to="/myProfile"
        activeClassName="nav-active"
        className="nav-item"
      >
        My Profile
      </NavLink>
      <NavLink to="/about" activeClassName="nav-active" className="nav-item">
        About us
      </NavLink>
    </div>
  );
};

export default Header;
