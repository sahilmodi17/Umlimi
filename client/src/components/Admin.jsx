import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Admin/Sidebar";

const admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default admin;
