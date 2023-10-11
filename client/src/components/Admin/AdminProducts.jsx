import React, { useEffect } from "react";

import { useUserContext } from "../../Context";
import { AdminNavbar } from "./Sidebar";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {
  const { setSidebar } = useUserContext();
  const navigateTo = useNavigate();

  useEffect(() => {
    setSidebar("Configuration");
  }, []);

  return (
    <>
      <div className=" flex h-[140vh] w-[80%]">
        <div className="container  bg-emerald-100">
          <AdminNavbar />

          <div className="flex flex-wrap ml-5 ">
            <div className="w-[95%] h-[123vh] bg-white rounded-2xl shadow ml-2 p-5 pt-3">
              <div className=" h-16 items-center flex justify-between">
                <div className="text-neutral-600 text-2xl font-bold  ">
                  All sections
                </div>
                <div className="w-[40%] flex justify-around items-center  mr-3">
                  <div className="">
                    <button
                      className="bg-emerald-400 rounded-md p-[0.35rem] px-4"
                      onClick={() => navigateTo("/admin/addproduct")}
                    >
                      Add Product
                    </button>
                  </div>
                  <div className="text-emerald-400 flex items-center">
                    <FiUpload className="mr-1" />
                    <div className=" text-base font-medium">Export</div>
                  </div>

                  <div>This Year</div>
                </div>
              </div>
              <div className="text-5xl flex justify-center items-center h-full ">
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
