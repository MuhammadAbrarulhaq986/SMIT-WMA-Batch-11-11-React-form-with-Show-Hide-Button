import React, { useEffect, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [showPasswod, setShowPasswod] = useState(false);

  const handleTogglePasswod = () => {
    setShowPasswod(!showPasswod);
  };
  return (
    <>
      <div className="container" id="container">
        <h1>Sign up form</h1>
        <form className="flex flex-col p-4 bg-black text-zinc-950 rounded shadow-md">
          <label className="text-sm text-white-600" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full h-10 pl-4 pr-4 text-sm text-black-700 border border-white-300 rounded"
            placeholder="Enter email"
          />
          <label className="text-sm text-black-600" htmlFor="password">
            Password
          </label>
          <input
            type={showPasswod ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 pl-4 pr-4 text-sm text-black-700 border border-white-300 rounded"
            placeholder="Enter password"
          />
          <button
            id="toggle-password"
            onClick={handleTogglePasswod}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            {showPasswod ? "Hide Password" : "Show Password"}
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
