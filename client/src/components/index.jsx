import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

const index = () => {
  return (
    <div className="">
      <Home />
      <Outlet />
    </div>
  );
};

export default index;
