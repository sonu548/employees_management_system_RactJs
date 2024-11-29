import React, { useState } from "react";

const Login = ({handleLogin}) => {
    const [Email, setEmail] = useState('')
    const [password, setpassword] = useState('')
  const submiltHandler = (e) => {
    e.preventDefault();
    handleLogin(Email, password);
    setEmail("")
    setpassword("")
  };
  return (
    <div id="login" className="flex h-screen w-screen items-center justify-center">
      <form
        onSubmit={(e) => {
          submiltHandler(e);
        }}
        className="flex flex-col w-[450px] h-[600px]  bg-black items-center justify-center rounded-lg"
      >
        <input
        value={Email}
        onChange={(e)=>{setEmail(e.target.value)}}
          required
          type="Email"
          className="p-2 m-4 border rounded"
          placeholder="Email/Mobile Number "
        />
        <input
         value={password}
         onChange={(e)=>{setpassword(e.target.value)}}
          required
          type="Password"
          className="p-2 m-6 border rounded"
          placeholder="Password"
        />
        <button id="loginButton" className="bg-blue-500 text-white font-bold p-2 w-1/2 m-4 rounded">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
