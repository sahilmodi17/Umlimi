import React, { useEffect } from "react";

import { useUserContext } from "../../Context";
import { AdminNavbar } from "./Sidebar";

const AdminProducts = () => {
  const { setSidebar } = useUserContext();

  useEffect(() => {
    setSidebar("Configuration");
  }, []);

  return (
    <>
      <div className=" flex h-[140vh] w-[80%]">
        <div className="container  bg-emerald-100">
          <AdminNavbar />

          <div className="flex flex-wrap ml-5 ">
            <div className="w-[95%] h-[123vh] bg-white rounded-2xl shadow ml-2">
              {/*Erase The below 3 line  */}
              <div className="text-5xl flex justify-center items-center h-full">
                Products Page Coming Soon...
              </div>

              {/* Write Your Code here  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
