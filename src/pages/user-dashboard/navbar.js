import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/sub-components/linkBtn";

const NavBar = props => {
  useEffect(() => {
    console.log("here inside navBar");
  });
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/user">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="home"
          />
        </NavLink>

        <NavLink
          to=""
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </NavLink>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/user">
            Home
          </NavLink>
          <NavLink className="navbar-item" to="/user/user-profile">
            Profile
          </NavLink>
          <NavLink className="navbar-item" to="/user/user-chat">
            Chat
          </NavLink>
          <NavLink className="navbar-item" to="/user/user-search">
            Search
          </NavLink>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <Button
              btnName="Logout"
              styles="button is-primary"
              type="submit"
              click={props.click}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default React.memo(NavBar);
