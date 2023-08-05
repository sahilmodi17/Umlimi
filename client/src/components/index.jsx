import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

const index = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default index;
