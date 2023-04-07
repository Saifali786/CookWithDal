import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

/* Author : Ruchika */

const Navbar = (props) => {
  function handleLogout() {
    localStorage.clear();
  }
  return (
    <>
      <header className="header-container">
        <NavLink to="/feed">
          <img src="header.jpg" alt="header-logo" className="header-logo" />
        </NavLink>
        <nav
          role="navigation"
          className="navbar navbar-expand-lg"
          aria-label="shopping list navigation"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse main-navigation">
            <NavLink
              className={(navData) =>
                "navigation-link" + (navData.isActive ? " active" : "")
              }
              to="/feed"
            >
              Feed
            </NavLink>
            <NavLink
              className={(navData) =>
                "navigation-link" + (navData.isActive ? " active" : "")
              }
              to="/meal-planner"
            >
              Planner
            </NavLink>
            <NavLink
              className={(navData) =>
                "navigation-link" + (navData.isActive ? " active" : "")
              }
              to="/shoppingList"
            >
              Shopping List
            </NavLink>
            <NavLink
              className={(navData) =>
                "navigation-link" + (navData.isActive ? " active" : "")
              }
              to=""
            >
              Search
            </NavLink>
            <NavLink
              className={(navData) =>
                "navigation-link" + (navData.isActive ? " active" : "")
              }
              to="/profilepage"
            >
              Profile
            </NavLink>

            <NavLink
              className={(navData) =>
                "navigation-link" + (navData.isActive ? " active" : "")
              }
              to="/"
              onClick={handleLogout}
            >
              Logout
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
