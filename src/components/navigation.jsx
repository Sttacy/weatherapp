import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  function isActivePage() {
    return ({ isActive }) => (isActive ? "active-page" : "");
  }
  return (
    <>
      {/* <a href="/">Main</a>
      <a href="/catalog">Laptop</a>
      <a href="/news">News</a> */}

      <NavLink
        className={isActivePage()}
        style={{ marginLeft: 20, textDecoration: "none", fontSize: 23 }}
        to="/"
      >
        Main
      </NavLink>
      <NavLink
        className={isActivePage()}
        style={{ marginLeft: 20, textDecoration: "none", fontSize: 23 }}
        to="/laptop-catalog"
      >
        Laptop
      </NavLink>
      <NavLink
        className={isActivePage()}
        style={{ marginLeft: 20, textDecoration: "none", fontSize: 23 }}
        to="/top-news"
      >
        News
      </NavLink>
      <NavLink
        className={isActivePage()}
        style={{ marginLeft: 20, textDecoration: "none", fontSize: 23 }}
        to="/weather"
      >
        Weather
      </NavLink>
    </>
  );
};

export default Navigation;
