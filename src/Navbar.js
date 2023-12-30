/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Navbar = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  return (
    <div className="container-fluid p-0">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="navbar"
      >
        <Link className="navbar-brand text-danger" to="/">
          CyberSecurity Awareness
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cyber-attacks">
                Cyber Attacks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            {username && (
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create a Blog
                </Link>
              </li>
            )}
          </ul>
          <div className="form-inline my-2 my-lg-0">
            {!username ? (
              <>
                <button
                  className="btn btn-outline-danger my-2 my-sm-0 mr-2"
                  type="button"
                >
                  <Link to="/login" className="login-register">
                    Login
                  </Link>
                </button>
                <button
                  className="btn btn-outline-danger my-2 my-sm-0"
                  type="button"
                >
                  <Link to="/register" className="login-register">
                    Register
                  </Link>
                </button>
              </>
            ) : (
              <>
                <div className="btn btn-danger btn-outline-danger text-white my-2 my-sm-0 mr-2">
                  {username}
                </div>
                <button
                  className="btn btn-outline-danger my-2 my-sm-0"
                  type="button"
                  onClick={logout}
                >
                  <Link to={"/"} className="attacks-links">
                    Logout
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
