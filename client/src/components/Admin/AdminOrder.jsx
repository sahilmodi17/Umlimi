import React, { useEffect } from "react";

import { useUserContext } from "../../Context";
import { AdminNavbar } from "./Sidebar";

const AdminOrder = () => {
  const { setSidebar } = useUserContext();

  useEffect(() => {
    setSidebar("Orders");
  }, []);

  return (
    <>
      <div className=" flex min-h-[150vh] w-[80%] bg-emerald-100">
        <div className="container ">
          <AdminNavbar />

          <div className="flex flex-wrap ml-5 ">
            <div className="w-[65%] h-[52vh] bg-white rounded-2xl shadow ml-2">
              <div className="text-5xl flex justify-center items-center h-full">
                Order Page Coming Soon...
              </div>
            </div>
            <div className="w-[31%] h-[52vh] bg-white rounded-2xl shadow mx-3 mr-4"></div>
            <div className="w-[97%] h-[80vh] bg-white rounded-2xl shadow ml-2 mt-3"></div>
            {/* Write Your Code here  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrder;
