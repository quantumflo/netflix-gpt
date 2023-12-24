import Header from "./Header";
import { NF_BG_IMG } from "../utils/constants";
import { useRef, useState } from "react";
import {loginValidation} from "../utils/validation";

const Login = () => {
  const [signupForm, setSignupForm] = useState(false);
  const [validationMsg, setValidationMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignupForm = () => {
    setSignupForm(!signupForm);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const validationMsg = loginValidation( email.current.value, password.current.value );
    setValidationMsg(validationMsg);
  };

  return (
    <div>
      <Header />
      <img className="" src={NF_BG_IMG} alt="Netflix background" />
      <form className="absolute top-1/2 w-[27rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg  bg-black p-6">
        <h1 className="text-white text-4xl mb-4 font-bold">{signupForm ? "Sign Up" : "Sign In"}</h1>
        {signupForm && (
          <>
            <input
              className="bg-gray-500 bg-opacity-50 text-white rounded-md px-8 py-4 text-2xl w-96 mb-2"
              type="text"
              placeholder="Full Name"
            />
          </>
        )}
        <input ref={email}
          className="bg-gray-500 bg-opacity-50 text-white rounded-md px-8 py-4 text-2xl w-96 mb-2"
          type="text"
          placeholder="Email address"
        />
        <input ref={password}
          className="bg-gray-500 bg-opacity-50 text-white rounded-md px-8 py-4 text-2xl w-96 mb-8"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 mb-3 font-semibold">{validationMsg}</p>
        <button
          onClick={handleLogin}
          className="bg-red-600 hover:bg-red-700 text-white rounded-md px-8 py-4 text-2xl w-96"
        >
          Sign In
        </button>
        {signupForm ? (
          <p className="text-white text-xl mt-4">
            Already Registered?
            <span onClick={toggleSignupForm} className="text-red-600 cursor-pointer ">
              Sign in now.
            </span>
          </p>
        ) : (
          <p className="text-white text-xl mt-4">
            New to Netflix?{" "}
            <span onClick={(e)=>toggleSignupForm(e)} className="text-red-600 cursor-pointer ">
              Sign up now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
