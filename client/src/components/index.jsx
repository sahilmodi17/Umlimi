import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

const index = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <hr></hr>
      <Footer />
    </div>
  );
};

export default index;
