import React from "react";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { useUserContext } from "../../Context";
import { BsCart2, BsLayersFill } from "react-icons/bs";
import { BiGridAlt } from "react-icons/bi";
import { GoCreditCard } from "react-icons/go";
import { TbReload } from "react-icons/tb";

const Sidebar = () => {
  const { sidebar, setSidebar } = useUserContext();

  return (
    <>
      <div className="sidebar  h-[100vh] w-[20%]">
        <div className="h-[20%]  flex justify-center ">
          <img
            src="../../../public/images/umlimi-logo.jpeg"
            alt="Umlimi-Logo"
            className="h-[30%] mt-8"
          />
        </div>
        <div className=" flex justify-center">
          <ul className=" text-zinc-400  text-2xl font-semibold ">
            <li
              className={
                sidebar === "Overview" ? "text-emerald-400 py-3" : "py-3"
              }
            >
              <a href="/admin/dashboard" className="flex items-center">
                <BsLayersFill className="mr-3" /> <span>Dashboard</span>
              </a>
            </li>
            <li
              className={
                sidebar === "Configuration" ? "text-emerald-400 py-3" : "py-3"
              }
            >
              <a href="/admin/products" className="flex items-center">
                <BiGridAlt className="mr-3" /> <span>Products</span>
              </a>
            </li>
            <li
              className={
                sidebar === "Customer" ? "text-emerald-400 py-3" : "py-3"
              }
            >
              <a href="/admin/customers" className="flex items-center">
                <FiUsers className="mr-3" /> <span>Customers</span>
              </a>
            </li>
            <li
              className={
                sidebar === "Orders" ? "text-emerald-400 py-3" : "py-3"
              }
            >
              <a href="/admin/orders" className="flex items-center">
                <BsCart2 className="mr-3" /> <span>Orders</span>
              </a>
            </li>
            <li
              className={
                sidebar === "Transaction" ? "text-emerald-400 py-3" : "py-3"
              }
            >
              <a href="/admin/transaction" className="flex items-center">
                <GoCreditCard className="mr-3" /> <span>Transactions</span>
              </a>
            </li>
          </ul>
        </div>
        <div className=" text-red-400 text-3xl font-semibold   flex justify-center  items-end  h-[35%]">
          <div>
            <button className=" flex  items-center">
              <div className="mr-2">
                <FiLogOut />
              </div>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const AdminNavbar = () => {
  const { sidebar, setSidebar } = useUserContext();

  return (
    <>
      <div className=" h-[10%] flex justify-between items-center ml-5">
        <div className=" text-neutral-600 text-4xl font-bold h-[50%] ml-2">
          {sidebar}
        </div>

        {/* <div className=" h-[50%] mr-20">
          <div className=" flex justify-center items-center">
            <button className="ml-2 flex justify-center items-center ">
              <TbReload className="mr-1" />
              Refresh
            </button>
          </div>
          <div>Updated Few seconds ago</div>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
