import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { useUserContext } from "../../Context";
import { useCartContext } from "../../context/Cart_context";

const Navbar = () => {
  const { cart, total } = useCartContext();
  const {
    searchName,
    setSearchName,
    searchproduct,
    setIsSearch,
    setCategory,
    category,
  } = useUserContext();
  const [navbar, setNavbar] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigateTo = useNavigate();

  const handleLogin = () => {
    navigateTo("/login");
  };

  const handleHome = () => {
    setCategory("");
    navigateTo("/");
  };

  const handleProfile = (e) => {
    if (e.target.value === "profile") navigateTo("/profile");
    else if (e.target.value === "logout") navigateTo("/login");
  };

  // const handleCategory = (e) => {
  //   setCategory(e.target.value)
  //   console.log(category) // Log the value of category
  //   if (category === 'All') {
  //     navigateTo('/')
  //   } else {
  //     navigateTo('/categoryProduct')
  //   }
  // }

  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    // console.log(selectedCategory);
    setCategory(selectedCategory); // Update the category state
  };

  useEffect(() => {
    if (category === "all") {
      navigateTo("/products");
    }
    if (category === "fruit") {
      navigateTo("/categoryProduct");
    }
    if (category === "vegetable") {
      navigateTo("/categoryProduct");
    }
  }, [category]);

  return (
    <>
      <nav className="w-full bg-white shadow">
        <div className="justify-between xl:px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-4">
          <div>
            <div
              className="flex items-center justify-between md:py-3 md:block cursor-pointer"
              onClick={handleHome}
            >
              <div className="xl:ml-16 flex justify-center items-center ">
                <img
                  src="../../../public/images/umlimi-logo.jpeg"
                  alt="umlimi-logo"
                  className="xl:h-10 xl:w-40 lg:h-9 lg:w-32 h-8 w-28"
                />
                {/* <h2 className="text-3xl font-bold text-emerald-400 "></h2> */}
                <h4 className="text-[#ADADAD] lg:block hidden">Grocery</h4>
              </div>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`${
                navbar ? "block" : "hidden"
              } md:flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
            >
              <div className="md:block hidden">
                <div className="w-96 h-10 p-3   bg-zinc-200 rounded-tl-sm rounded-bl-sm justify-start items-center gap-3 inline-flex">
                  <select
                    className="justify-center items-center gap-px flex md:w-32"
                    onChange={(e) => {
                      handleCategory(e);
                    }}
                  >
                    <option
                      value="all"
                      className="text-slate-700 text-sm font-semibold"
                    >
                      All Categories
                    </option>
                    <option
                      value="fruit"
                      className="text-slate-700 text-sm font-semibold"
                    >
                      Fruits
                    </option>
                    <option
                      value="vegetable"
                      className="text-slate-700 text-sm font-semibold"
                    >
                      Vegetables
                    </option>
                  </select>
                  <div className="text-[#ADADAD]">|</div>
                  <div className="justify-center items-center gap-3 flex">
                    <input
                      className="text-zinc-400 text-md font-medium "
                      placeholder="Search for items..."
                      value={searchName}
                      onChange={(e) => {
                        setSearchName(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    className="w-14 h-10 p-4  text-white bg-emerald-400 rounded-tr-sm rounded-br-sm justify-center items-center gap-2 inline-flex"
                    onClick={() => navigateTo("/searchProduct")}
                  >
                    <BiSearch />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* cart */}
          <div className="md:block hidden ">
            <div
              className=" lg:w-56 lg:h-8 flex justify-center items-center gap-14 hover:cursor-pointer "
              onClick={() => {
                navigateTo("/cart");
              }}
            >
              <div className="justify-center items-center gap-1 flex ">
                <div className="w-8 h-8 relative">
                  <BsCart2 className="h-7 w-7" />
                  <div className="w-4 h-4 left-[15px] top-0 absolute bg-emerald-400 rounded-full border border-white" />
                  <div className="left-[21px] top-[1px] absolute text-white text-xs font-medium">
                    {cart.length}
                  </div>
                </div>
                <div className="justify-start items-center gap-1 flex ">
                  <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="text-slate-700 text-sm font-medium">
                      My cart
                    </div>
                    <div className="text-emerald-400 text-xs font-medium">
                      ${total}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* profile */}
          <div className="md:block hidden ">
            <div className="xl:mr-16 lg:w-40 h-10 flex justify-center items-center gap-1 hover:cursor-pointer">
              <button
                onClick={() => {
                  navigateTo("/profile");
                }}
                className="py-2 px-4 text-center hover:bg-whatsapp hover:text-gray-500 rounded-lg"
              >
                <VscAccount className="w-6 h-6" title="Profile" />
              </button>

              {/* <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="py-2 px-4 text-center hover:bg-whatsapp hover:text-white rounded-lg"
                >
                 
                  <img
                    className="w-10 h-10 rounded-full "
                    src="../../../public/images/umlimi-profile.png"
                  />
                </button>
                {isProfileOpen && (
                  <div
                    className="absolute top-10 -left-0 w-36 bg-white shadow-lg border"
                    onMouseLeave={() => setIsProfileOpen(false)}
                  >
                    <div
                      className="py-2 px-4 text-start cursor-pointer"
                      // onClick={handleProfile}
                      onClick={() => {
                        navigateTo("/profile");
                      }}
                    >
                      Profile
                    </div>
                    <div
                      className="py-2 px-4 text-start cursor-pointer hover:bg-whatsapp hover:text-white"
                      // onClick={handleLogout}
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
