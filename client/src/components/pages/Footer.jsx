import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigateTo = useNavigate();
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 font-quicksand  ">
        <div className="flex justify-center items-center">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="/" className="flex items-center">
                  <img
                    src="../../../public/images/umlimi-logo.jpeg"
                    alt="umlimi-logo"
                    className="xl:h-10 xl:w-40 lg:h-9 lg:w-32 h-8 w-28"
                  />

                  <h4 className="text-[#ADADAD] lg:block hidden">Grocery</h4>
                </a>
                <div className="mt-4 h-36 flex flex-col justify-between text-gray-500 dark:text-gray-400">
                  <div className="">Address: 1762 School House Road</div>
                  <div className="">Call Us: 1233-777 </div>
                  <div className="">Email: groceyish@contact.com</div>
                  <div className="">
                    Work-Hours: 8:00 - 20:00, Sunday - Thursday
                  </div>
                </div>
              </div>
              {/* <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> */}
              <div>
                <h2 className=" mb-6  text-lg font-quicksand text-gray-900  dark:text-white">
                  Account
                </h2>
                <ul className=" h-32 mb-6 text-gray-500 dark:text-gray-400 font-medium flex flex-col justify-between">
                  <li className="">
                    <a href="#" className="hover:underline">
                      Wishlist
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="/cart"
                      className="  hover:underline"
                      // onClick={() => navigateTo("/cart")}
                    >
                      Cart
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">
                      Track Order
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:underline">
                      Shipping Details
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-lg font-quicksand text-gray-900  dark:text-white">
                  Usefull Links
                </h2>
                <ul className=" h-40 mb-6 flex flex-col justify-between text-gray-500 dark:text-gray-400 font-medium">
                  <li className="">
                    <a href="#" className="hover:underline ">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Hot Deals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      New Product
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Promotions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-lg font-quicksand text-gray-900  dark:text-white">
                  Help Center
                </h2>
                <ul className="h-40 mb-6 flex flex-col justify-between text-gray-500 dark:text-gray-400 font-medium">
                  <li className="">
                    <a href="#" className="hover:underline">
                      Payments
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Refund
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Checkout
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Q&A
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="/" className="hover:underline">
                  Umlimi™
                </a>
                . All Rights Reserved.
              </span>

              <div>
                <img src="../../../public/images/Payment.png" alt="payment" />
              </div>

              <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                <span>
                  <a href="#">
                    <BsFacebook className="h-7 w-7 text-[#3BB77E]" />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <BsInstagram className="h-7 w-7 text-[#3BB77E]" />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <BsTwitter className="h-7 w-7 text-[#3BB77E]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
