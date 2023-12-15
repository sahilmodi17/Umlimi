import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import PopUp_Dialog from "../pages/PopUp_Dialog";
import { useUserContext } from "../../Context";
const Profile = () => {
  const [edit, setEdit] = useState(false);

  const [data, setData] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [userId, setUserId] = useState("");

  const navigateTo = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get("/api/v1/dashboard/profile", {
        withCredentials: true,
      });
      setData(response.data);
      setFirstName(response.data.user.firstName || "");
      setLastName(response.data.user.lastName || "");
      setEmail(response.data.user.email || "");
      setAddress(response.data.user.address || "");
      setCity(response.data.user.city || "");
      setState(response.data.user.state || "");

      setUserId(response.data.user._id);
    } catch (error) {
      // alert("please login");
      navigateTo("/login");
    }
  };

  console.log(data);
  useEffect(() => {
    getData();
  }, [edit]);
  // console.log(firstName);

  const handleEditClick = () => {
    setEdit(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUpdateData = async () => {
    try {
      const response = await axios.patch(
        `/api/v1/dashboard/profile/${userId}`,
        { firstName, lastName, email, address, city, state },
        { withCredentials: true }
      );
      setData(response.data);
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMyOrders = async () => {
    try {
      const response = await axios.get(`/api/v1/order/getUserOrder/${userId}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      (
      <div className="py-10  flex flex-col items-center ">
        <div className="pt-3 flex flex-col  md:w-[60%] lg:w-[40%] ">
          <div className="flex justify-between pb-5  ">
            <div className="text-black text-5xl font-semibold flex items-center">
              {edit ? "Edit Profile!" : `Welcome ${firstName}!`}
            </div>

            {/* <img
              className="w-28 h-28 rounded-full"
              src="https://via.placeholder.com/120x120"
            /> */}
          </div>
          {/* Name Fields */}
          <div className="flex md:flex-row gap-5 md:gap-8">
            <div className="w-[100%]">
              <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
                First Name
              </div>
              <input
                type="text"
                name="first_name"
                className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
                placeholder="Mehrab"
                disabled={!edit}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-[100%]">
              <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
                Last Name
              </div>
              <input
                type="text"
                name="last_name"
                className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
                placeholder="Bozorgi"
                disabled={!edit}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div className="pt-5">
            <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
              Email
            </div>
            <input
              type="email"
              name="email"
              className="bg-white w-[80%] rounded border border-zinc-500 h-12 px-3"
              placeholder="Mehrabbozorgi.business@gmail.com"
              disabled={!edit}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* address */}
          <div className="pt-5">
            <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
              Address
            </div>
            <input
              type="text"
              name="address"
              className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
              placeholder="Enter Your Address"
              disabled={!edit}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* contact number */}
          {/* <div className="pt-5">
            <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
              Contact Number
            </div>
            <input
              type="number"
              name="contact"
              className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
              placeholder="Enter Your "
              disabled={!edit}
            />
          </div> */}

          {/* city and state */}
          <div className="flex flex-col md:flex-row md:gap-8 pt-5">
            <div className="w-full">
              <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
                City
              </div>
              <input
                type="text"
                name="gender"
                className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
                placeholder="Enter your city"
                disabled={!edit}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="w-full">
              <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
                State
              </div>
              <input
                type="text"
                name="state"
                className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
                placeholder="Enter your state"
                disabled={!edit}
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row md:justify-center md:items-center gap-4">
            <button
              type="button"
              className="bg-emerald-400 rounded-sm w-full md:w-32 lg:w-40 hover:cursor-pointer"
              onClick={() => {
                handleMyOrders();
                navigateTo(`/myorder/${userId}`);
              }}
            >
              <div className="text-white text-lg md:text-xl lg:text-2xl font-semibold p-2">
                My Orders
              </div>
            </button>
          </div>
          {!edit ? (
            <div className="mt-6 flex flex-col md:flex-row md:justify-center md:items-center gap-4">
              <button
                type="button"
                className="bg-white rounded-sm border border-emerald-400 w-full md:w-32 lg:w-40 hover:cursor-pointer"
                onClick={() => {
                  Cookies.remove("token", { domain: "localhost", path: "/" });

                  // Cookies.remove("token");
                  navigateTo("/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="text-emerald-400 text-lg md:text-xl lg:text-2xl font-normal p-2">
                  Logout
                </div>
              </button>
              <button
                type="button"
                className="bg-emerald-400 rounded-sm w-full md:w-32 lg:w-40 hover:cursor-pointer"
                onClick={handleEditClick}
              >
                <div className="text-white text-lg md:text-xl lg:text-2xl font-semibold p-2">
                  Edit
                </div>
              </button>
            </div>
          ) : (
            <div className="mt-6 flex flex-col md:flex-row md:justify-center md:items-center gap-4">
              <button
                type="button"
                className="bg-white rounded-sm border border-emerald-400 w-full md:w-32 lg:w-40 hover:cursor-pointer"
                onClick={() => {
                  setEdit(false);
                  // navigateTo("/profile");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="text-emerald-400 text-lg md:text-xl lg:text-2xl font-normal p-2">
                  Cancel
                </div>
              </button>
              <button
                type="button"
                className="bg-emerald-400 rounded-sm w-full md:w-32 lg:w-40 hover:cursor-pointer"
                onClick={handleUpdateData}
              >
                <div className="text-white text-lg md:text-xl lg:text-2xl font-semibold p-2">
                  Save
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
