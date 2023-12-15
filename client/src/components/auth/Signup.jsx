import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import PopUp_Dialog from "../pages/PopUp_Dialog";
import { useUserContext } from "../../Context";
const Signup = () => {
  const { email, setEmail, otp, setOTP, userId, setUserId } = useUserContext();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [message, setMessage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigateTo = useNavigate();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setConfirmPassword("");
    setOTP("");
  };

  const handleSendOTP = async () => {
    try {
      // console.log("handlesendOtp");
      await axios.post("/api/v1/auth/user/sendOtp", { email });
      setMessage("OTP sent to your email. Check your inbox.");
    } catch (error) {
      console.error(error);
      setMessage("Error sending OTP.");
    }
  };

  const handleRegister = async () => {
    if (firstName === "") alert("Enter First Name");
    else if (lastName === "") alert("Enter Last Name");
    else if (email === "") alert("Enter Email");
    else if (password === "") alert("Enter Password");
    else if (confirmPassword === "") alert("Enter Confirm Password");
    else if (otp === "") alert("please verify the email");
    else {
      try {
        const data = { firstName, lastName, email, password };

        const res = await axios.post("/api/v1/auth/user/register", data);
        setUserId(res.data.newUser._id);

        setOTP("");
        navigateTo("/");
      } catch (err) {
        console.log(err);
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

  const handleConfirmPassword = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);

    if (value === password) {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Passwords do not match");
    }
  };

  return (
    <>
      <div className="bg-emerald-100 h-[100vh] w-[100vw]">
        <div className="w-full pt-10 px-4 md:px-8 lg:px-16 flex flex-col items-center">
          {/* Title */}
          <div className="mb-4 text-center">
            <span className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold">
              Welcome to{" "}
            </span>
            <span className="text-emerald-400 text-3xl md:text-4xl lg:text-5xl font-semibold">
              Umlimi!
            </span>
          </div>

          <div className="pt-3 w-full md:w-[60%] lg:w-[40%] ">
            {/* Name Fields */}
            <div className="flex  md:flex-row gap-5 md:gap-8">
              <div className="w-[100%]">
                <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl ">
                  First Name
                </div>
                <input
                  type="text"
                  name="first_name"
                  className="bg-white w-full rounded border-2 border-gray-300 p-2 mt-2 h-12 px-3"
                  placeholder="Mehrab"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-[100%]">
                <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl ">
                  Last Name
                </div>
                <input
                  type="text"
                  name="last_name"
                  className="bg-white w-full rounded border-2 border-gray-300 p-2 mt-2 h-12 px-3"
                  placeholder="Bozorgi"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
            {/* <div className='pt-3'>
            <div className='text-zinc-900 text-lg md:text-xl lg:text-2xl '>
              Email
            </div>
            <input
              type='email'
              name='email'
              value={email}
              className='bg-white w-full rounded border-2 border-gray-300 p-2 mt-2 h-12 px-3'
              placeholder='Mehrabbozorgi.business@gmail.com'
              onChange={validateEmail}
            />
            {email && (
              <span
                className={
                  emailError === 'Valid Email'
                    ? 'text-green-500'
                    : 'text-red-500'
                }
              >
                {emailError}
              </span>
            )}
          </div> */}
            <div className="pt-3">
              <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl">
                Email
              </div>
              <input
                type="email"
                name="email"
                disabled={otp && true}
                className="bg-white w-[80%] rounded border border-zinc-500 h-12 px-3"
                placeholder="Mehrabbozorgi.business@gmail.com"
                value={email}
                onChange={validateEmail}
              />
              {email && (
                <button
                  type="button"
                  className=" px-4 py-2"
                  onClick={() => {
                    openModal();
                    handleSendOTP();
                  }}
                  style={{ color: "#2929d1" }}
                >
                  Verify Email
                </button>
              )}

              {isModalOpen && (
                <PopUp_Dialog onClose={() => setIsModalOpen(false)} />
              )}
            </div>
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
            {otp && <span className="text-green-500">Email verified</span>}


            {/* Password */}
            <div className="pt-3">
              <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl ">
                Set Password
              </div>
              <input
                type="password"
                name="password"
                value={password}
                className="bg-white w-full rounded border-2 border-gray-300 p-2 mt-2 h-12 px-3"
                placeholder="Enter your password"
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

            {/* Confirm Password */}
            <div className="pt-3">
              <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl ">
                Confirm Password
              </div>
              <input
                type="password"
                name="confirm_password"
                value={confirmPassword}
                className="bg-white w-full rounded border-2 border-gray-300 p-2 mt-2 h-12 px-3"
                placeholder="Confirm your password"
                onChange={handleConfirmPassword}
              />
              {confirmPassword && (
                <span
                  className={
                    confirmPasswordError === "Passwords match"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {confirmPasswordError}
                </span>
              )}
            </div>

        

            {/* Buttons */}
            <div className="mt-6 flex flex-col md:flex-row md:justify-center md:items-center gap-4">
              <button
                type="button"
                className="bg-white rounded-sm border border-emerald-400 w-full md:w-32 lg:w-40 hover:cursor-pointer"
                onClick={handleReset}
              >
                <div className="text-emerald-400 text-lg md:text-xl lg:text-2xl font-normal p-2">
                  Reset
                </div>
              </button>
              <button
                type="button"
                className="bg-emerald-400 rounded-sm w-full md:w-32 lg:w-40 hover:cursor-pointer"
                onClick={handleRegister}
              >
                <div className="text-white text-lg md:text-xl lg:text-2xl font-semibold p-2">
                  Register
                </div>
              </button>
            </div>

            {/* Login Prompt */}
            <div className="mt-4 text-center">
              <span className="text-black text-lg md:text-xl lg:text-2xl font-semibold">
                Already have an account?{" "}
              </span>
              <span
                className="text-emerald-400 text-lg md:text-xl lg:text-2xl font-semibold hover:cursor-pointer"
                onClick={() => navigateTo("/login")}
              >
                Log in
              </span>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Signup;
