import React, { useEffect } from "react";

import { useUserContext } from "../../Context";
import { AdminNavbar } from "./Sidebar";

const Dashboard = () => {
  const { setSidebar } = useUserContext();

  useEffect(() => {
    setSidebar("Overview");
  }, []);

  return (
    <>
      <div className=" flex min-h-[140vh] w-[80%]">
        <div className="container   bg-emerald-100">
          <AdminNavbar />

          <div className="flex flex-wrap ml-5 ">
            <div className="w-[65%] h-[70vh] bg-white rounded-2xl shadow ml-2">
              <div className="text-5xl flex justify-center items-center h-full">
                Dashboard Coming Soon...
              </div>
            </div>
            <div className="w-[31%] h-[70vh] bg-white rounded-2xl shadow mx-3 mr-4"></div>
            <div className="w-[65%] h-[52vh] bg-white rounded-2xl shadow ml-2 mt-3"></div>
            <div className="w-[31%] h-[52vh] bg-white rounded-2xl shadow mx-3 mt-3 mr-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
