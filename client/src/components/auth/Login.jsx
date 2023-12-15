import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import { useUserContext } from "../../Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const { userId, setUserId } = useUserContext();
  const navigateTo = useNavigate();

  const handleReset = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = async () => {
    if (email === "") alert("Enter Email");
    else if (password === "") alert("Enter Password");
    else {
      try {
        const data = { email, password };

        const res = await axios.post("/api/v1/auth/user/login", data);

        setUserId(res.data.user._id);
        console.log(res.data.user);

        if (
          res.data.user.firstName === "admin" &&
          res.data.user.email === "surjit.singhss1010@gmail.com"
        ) {
          navigateTo("/admin/dashboard");
        } else {
          navigateTo("/");
        }
      } catch (err) {
        console.log(err);
        alert("please enter valid credentials");
      }
    }
  };

  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (validator.isEmail(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid Email*");
    }
  };

  const validatePassword = (e) => {
    setPassword(e.target.value);
    if (validator.isStrongPassword(e.target.value)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Passwords must have at least 8 characters and must contain : uppercase letters, lowercase letters, numbers, and symbols*"
      );
    }
  };

  return (
    <>
      <div className=" bg-emerald-100 h-[100vh] w-[100vw]  flex justify-center items-center ">
        <div className=" sm:w-[60%] sm:h-[60%]">
          <div className="font-quicksand text-5xl mb-3">
            <span className="">Welcome </span>
            <span className="text-emerald-600">Back!</span>
          </div>
          <div className="my-2">
            <div>
              <label className="text-xl ">Email</label>
            </div>

            <input
              type="text"
              name="email"
              value={email}
              className=" w-full h-12 rounded border-2 border-gray-300 p-2 mt-2"
              placeholder="Enter your email"
              onChange={validateEmail}
            />
            {email && (
              <span
                className={
                  emailError === "Valid Email"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {emailError}
              </span>
            )}
          </div>
          <div className="my-2">
            <label className="text-xl">Password</label>

            <input
              type="password"
              name="password"
              value={password}
              className=" w-full h-12 rounded border-2 border-gray-300 p-2 mt-2"
              placeholder="Enter Your Password"
              onChange={validatePassword}
            />
            {password && (
              <span
                className={
                  passwordError === "Strong Password"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {passwordError}
              </span>
            )}
          </div>

          {/* <div className="text-lg my-2">
            <span className="">Forgot Password? </span>
            <span className="text-[#3BB77E] cursor-pointer" onClick={() => {}}>
              Reset now.
            </span>
          </div> */}
          <div className="my-4">
            <button
              type="button"
              className="w-40 h-10 bg-white rounded border border-emerald-400"
              onClick={() => handleReset()}
            >
              <div className="text-emerald-400 text-xl font-normal">Reset</div>
            </button>
            <button
              type="button"
              className="w-40 h-10 bg-emerald-400 rounded ml-7 "
              onClick={() => handleLogin()}
            >
              <div className="text-white text-xl font-normal">Log in</div>
            </button>
          </div>

          <div className="text-lg font-semibold">
            <span className=" ">New to Umlimi? </span>
            <span
              className="text-emerald-400 cursor-pointer "
              onClick={() => navigateTo("/register")}
            >
              Create an account now.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
