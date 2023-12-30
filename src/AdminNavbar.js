/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid p-0">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="navbar"
      >
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="">
                Modify Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="modify-attacks">
                Modify Attacks
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
