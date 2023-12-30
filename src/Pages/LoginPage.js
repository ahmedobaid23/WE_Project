import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
      setRedirect(true);
    } else {
      alert("Wrong Credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  } else {
    return (
      <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-dark m-0">
        <form
          className="bg-dark p-4 rounded"
          style={{ maxWidth: "400px" }}
          onSubmit={login}
        >
          <div className="mb-3 text-center">
            <h1 className="text-white">Login</h1>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter your Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger">Login</button>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginPage;
