import React, { useEffect, useState } from "react";
import { useUserContext } from "../../Context";
import { AdminNavbar } from "./Sidebar";
import axios from "axios";

const Dashboard = () => {
  const { setSidebar, setSearchTerm } = useUserContext();
  const [prod, setProd] = useState([]);
  const [order, setOrder] = useState([]);
  const [user, setUser] = useState([]);
  const [txn, setTxn] = useState([]);

  useEffect(() => {
    setSidebar("Overview");
    allProduct();
    allOrders();
    allUsers();
  }, []);

  const allProduct = async () => {
    try {
      const { data } = await axios.get("/api/v1/admin/getAllProducts");
      setProd(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const allOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/order/getAllOrders");
      setOrder(data.orders);

      const transactionIds = data.orders.map(
        (order) => order.products[0].transactionId
      );
      setTxn(transactionIds);
    } catch (error) {
      console.log(error);
    }
  };

  const allUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/getAllUser");
      setUser(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex min-h-[140vh] w-[80%]">
        <div className="container bg-emerald-100">
          <AdminNavbar />

          <div className="mt-10 flex flex-wrap ml-5">
            <div className="">
              <h1 className="text-7xl flex justify-center w-[75vw] mb-10 text-gray-700">
                Welcome Admin !!
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full">
              <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[40%] md:rounded-none md:rounded-s-lg"
                  src="../../../public/images/homePage_img.png"
                  alt=""
                />
                <div className="ml-6 flex flex-col justify-between p-4 leading-normal">
                  <h3 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Total Product
                  </h3>
                  <p class="mb-3 text-9xl text-gray-700 dark:text-gray-400 flex items-center justify-center">
                    {prod.length}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[40%] md:rounded-none md:rounded-s-lg"
                  src="../../../public/images/users.jpg"
                  alt=""
                />
                <div className="ml-6 flex flex-col justify-between p-4 leading-normal">
                  <h3 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Total Users
                  </h3>
                  <p class="mb-3 text-9xl text-gray-700 dark:text-gray-400 flex items-center justify-center">
                    {user.length}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[40%] md:rounded-none md:rounded-s-lg"
                  src="../../../public/images/total_orders.jpg"
                  alt=""
                />
                <div className="ml-6 flex flex-col justify-between p-4 leading-normal">
                  <h3 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Total Orders
                  </h3>
                  <p class="mb-3 text-9xl text-gray-700 dark:text-gray-400 flex items-center justify-center">
                    {order.length}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[40%] md:rounded-none md:rounded-s-lg"
                  src="../../../public/images/transaction.jpg"
                  alt=""
                />
                <div className="ml-6 flex flex-col justify-between p-4 leading-normal">
                  <h3 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Total successful transactions
                  </h3>
                  <p class="mb-3 text-9xl text-gray-700 dark:text-gray-400 flex items-center justify-center">
                    {txn.filter((id) => id !== undefined).length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// Total successful transactions:{" "}
//
