import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("Invalid username or password");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="bg-black p-8 rounded-lg shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-lime-500 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-lime-500">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-lime-500">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-lime-500 text-white w-full py-2 rounded-lg hover:bg-white hover:text-black flex justify-center transition duration-300"
        >
          <p className="text-center">Login</p>
        </button>
        <br />
        <p className="text-center">or</p>
        <div className="flex flex-row justify-center gap-4">
           <img className="rounded-full cursor-pointer hover:scale-105 transition duration-300" src="/assets/Google logo.jpg" alt="" />
           <img className="rounded-full cursor-pointer hover:scale-105 transition duration-300" src="/assets/Microsoft logo.jpg" alt="" />
        </div>
        <div className="mt-4 text-center">
          <br />
          <br />
          <button
            type="button"
            className="bg-lime-500 text-black w-full py-2 rounded-lg hover:bg-black hover:text-white transiton duration-300 flex justify-center"
          >
            Forgot Password
          <NavLink to="/Forgot" className="text-blue-500 hover:underline">
          </NavLink>
          </button>
          <br />
          <br />
          <span className="text-white">Don't have an account? </span>
          <NavLink to="/Signup" className="text-blue-500 hover:underline">
            SIGN UP
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
