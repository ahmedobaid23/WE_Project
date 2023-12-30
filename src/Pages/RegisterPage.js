import React, { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (response.status === 200) {
      alert("Registration Successful");
    } else {
      alert("Registration Failed");
    }
  }
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-dark">
      <form className="bg-dark p-4 rounded" onSubmit={register}>
        <div className="mb-3">
          <div className="mb-3 text-center">
            <h1 className="text-white">Register</h1>
          </div>
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
          <button className="btn btn-danger">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
