import React, { useState } from "react";

const Login = ({handleLogin}) => {

  // console.log({handleLogin})

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("default behaviour prevented");
    // console.log("email is :" , email)
    // console.log("password is :" , password)

    handleLogin(email, password)

    setEmail('')
    setPassword('')
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#242424]">
      <div className="">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            className="border-2 border-green-600 rounded-lg px-8 py-3 w-80 bg-[#242424] outline-none text-lg custom-shadow-input focus:outline-none"
            type="email"
            required
            placeholder="Enter your email... "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              // console.log(e.target.value)
            }}
          />
          <input
            className="border-2 border-green-600 rounded-lg px-8 py-3 w-80  bg-[#242424] outline-none text-lg custom-shadow-input focus:outline-none"
            type="password"
            required
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button className="bg-green-600 rounded-md font-semibold custom-shadow-login px-7 py-2 outline-none mt-3 w-80">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
