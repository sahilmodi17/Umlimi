import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ProductPopUpInformation from "../pages/ProductPopUpInformation";
import ProductPopUpPhoto from "../pages/ProductPopUpPhoto";
import { useUserContext } from "../../Context";
const TransactionTable = () => {
  const navigateTo = useNavigate();
  const [filteredTransactions, setFilteredTransactions] = useState([]);

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
    // Filter transactions based on the search term
    const filtered = allOrders.flatMap((order, index) =>
      order.products
        .filter((product) =>
          product.productId.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
        .map((filteredProduct) => ({
          orderIndex: index,
          ...filteredProduct,
        }))
    );
    setFilteredTransactions(filtered);
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
              <th scope="col" className="px-6 py-3  ">
                Sr No
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Category
              </th>
              <th scope="col" className="px-6 py-3 ">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 ">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Customer Email
              </th>
              <th scope="col" className="px-6 py-3 ">
                Transaction Id
              </th>
              <th scope="col" className="px-6 py-3 ">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {searchTerm
              ? filteredTransactions.map((transaction, index) => (
                  <tr
                    className="border-b border-gray-200 font-semibold text-lg"
                    key={transaction._id}
                  >
                    <td scope="row" className="px-6 py-2">
                      {index + 1}
                    </td>
                    <td className="px-6 py-2">{transaction.productId?.name}</td>
                    <td className="px-6 py-2">
                      {transaction.productId?.category}
                    </td>
                    <td className="px-6 py-2"> {transaction.qty} </td>
                    <td className="px-6 py-2">
                      {allOrders[transaction.orderIndex].userId.firstName}{" "}
                      {allOrders[transaction.orderIndex].userId.lastName}
                    </td>
                    <td className="px-6 py-2">
                      {allOrders[transaction.orderIndex].userId.email}
                    </td>
                    <td className="px-6 py-2"> {transaction.transactionId} </td>
                    <td className="px-6 py-2">
                      {formatDate(allOrders[transaction.orderIndex].orderDate)}
                    </td>
                  </tr>
                ))
              : allOrders.flatMap((order, index) =>
                  order.products.map((product, productIndex) => (
                    <tr
                      className="border-b border-gray-200 font-semibold text-lg"
                      key={product._id}
                    >
                      <td scope="row" className="px-6 py-2">
                        {index * order.products.length + productIndex + 1}
                      </td>
                      <td className="px-6 py-2">{product.productId?.name}</td>
                      <td className="px-6 py-2">
                        {product.productId?.category}
                      </td>
                      <td className="px-6 py-2"> {product.qty} </td>
                      <td className="px-6 py-2">
                        {order.userId.firstName} {order.userId.lastName}
                      </td>
                      <td className="px-6 py-2">{order.userId.email}</td>
                      <td className="px-6 py-2"> {product.transactionId} </td>
                      <td className="px-6 py-2">
                        {formatDate(order.orderDate)}
                      </td>
                    </tr>
                  ))
                )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionTable;
