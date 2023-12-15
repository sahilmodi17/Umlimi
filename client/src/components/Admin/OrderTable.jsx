import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ProductPopUpInformation from "../pages/ProductPopUpInformation";
import ProductPopUpPhoto from "../pages/ProductPopUpPhoto";
import { useUserContext } from "../../Context";

const OrderTable = () => {
  const navigateTo = useNavigate();
  const [filteredOrders, setFilteredOrders] = useState([]);

  const count = useRef(0); // Initialize count with 0

  const { searchTerm, setAllOrders, allOrders } = useUserContext();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // January is 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getAllOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/order/getAllOrders");
      setAllOrders(data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Filter orders based on the search term
    const filtered = allOrders.filter(
      (order) =>
        order.userId.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.userId.firstName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        order.userId.lastName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        order.products.some((product) =>
          product.productId.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
    );
    setFilteredOrders(filtered);
  }, [searchTerm, allOrders]);

  useEffect(() => {
    getAllOrders();
  }, []);

  useEffect(() => {
    // Increment count here
    count.current += 1;
  }, [allOrders]); // Update count whenever allOrders changes

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left ">
          <thead className=" text-gray-700 bg-zinc-200 rounded-lg text-xl font-medium font-['Roboto']">
            <tr>
              <th scope="col" className="px-6 py-3">
                SR No
              </th>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Email
              </th>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Order Date
              </th>
            </tr>
          </thead>
          <tbody>
            {searchTerm
              ? filteredOrders.map((order, index) => (
                  <tr
                    className="border-b border-gray-200 font-semibold text-lg"
                    key={order._id}
                  >
                    <td scope="row" className="px-6 py-2">
                      {index + 1}
                    </td>
                    <td className="px-6 py-2">{order._id}</td>
                    <td className="px-6 py-2">{order.userId.email}</td>
                    <td className="px-6 py-2">
                      {order.userId.firstName} {order.userId.lastName}
                    </td>
                    <td className="px-6 py-2">
                      <div className="cursor-pointer">
                        {order.products[0].productId?.name}
                      </div>
                    </td>
                    <td className="px-6 py-2">{formatDate(order.orderDate)}</td>
                  </tr>
                ))
              : allOrders.map((order, index) => (
                  <tr
                    className="border-b border-gray-200 font-semibold text-lg"
                    key={order._id}
                  >
                    <td scope="row" className="px-6 py-2">
                      {index + 1}
                    </td>
                    <td className="px-6 py-2">{order._id}</td>
                    <td className="px-6 py-2">{order.userId.email}</td>
                    <td className="px-6 py-2">
                      {order.userId.firstName} {order.userId.lastName}
                    </td>
                    <td className="px-6 py-2">
                      <div className="cursor-pointer">
                        {order.products[0].productId?.name}
                      </div>
                    </td>
                    <td className="px-6 py-2">{formatDate(order.orderDate)}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderTable;
