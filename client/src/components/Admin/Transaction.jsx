// Transaction.jsx

import React, { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { AdminNavbar } from "./Sidebar";
import TransactionTable from "./TransactionTable";
import { useUserContext } from "../../Context";
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";

const Transaction = () => {
  const { setSidebar, allOrders } = useUserContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setSidebar("Transaction");
  }, []);

  const totalProducts = allOrders.reduce(
    (acc, order) => acc + order.products.length,
    0
  );

  const exportTransactionsToExcel = async () => {
    const filteredOrders = allOrders.filter(
      (order) =>
        new Date(order.orderDate).getFullYear() === selectedYear &&
        order.products.some((product) =>
          product.productId?.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
    );

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Transactions");

    // Add header row
    worksheet.addRow([
      "SR No",
      "Product Name",
      "Category",
      "Quantity",
      "Customer Name",
      "Customer Email",
      "Transaction Id",
      "Date",
    ]);

    // Add data rows
    filteredOrders.forEach((order, orderIndex) => {
      order.products.forEach((product, productIndex) => {
        worksheet.addRow([
          productIndex + 1,
          product.productId?.name,
          product.productId?.category,
          product.qty,
          `${order.userId.firstName} ${order.userId.lastName}`,
          order.userId.email,
          product.transactionId,
          new Date(order.orderDate).toLocaleDateString(),
        ]);
      });
    });

    // Save the workbook
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `transactions_${selectedYear}.xlsx`);
  };

  const handleSelectYear = () => {
    const last5Years = Array.from(
      { length: 5 },
      (_, i) => new Date().getFullYear() - i
    );
    const enteredYear = window.prompt(
      "Enter a year between " + last5Years[4] + " and " + last5Years[0],
      selectedYear
    );
    if (enteredYear) {
      setSelectedYear(enteredYear);
    }
  };

  return (
    <>
      <div className="flex min-h-[100vh] w-[80%]">
        <div className="container bg-emerald-100">
          <AdminNavbar />

          <div className="flex flex-wrap ml-5 ">
            <div className="w-[95%] min-h-[87vh] bg-white rounded-2xl shadow ml-2 p-5 pt-3">
              <div className="h-16 items-center flex justify-between">
                <div className="text-neutral-600 text-2xl font-bold  ">
                  Total Products: {totalProducts}
                </div>
                <div className="">
                  <input
                    className="w-96 h-10 bg-white border border-zinc-500 rounded-lg pl-2 "
                    placeholder="Search for items..."
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                </div>
                <div className="w-[40%] flex justify-around items-center  mr-3">
                  <div
                    className="text-emerald-400 flex items-center cursor-pointer"
                    onClick={exportTransactionsToExcel}
                  >
                    <FiUpload className="mr-1" />
                    <div className=" text-base font-medium">Export</div>
                  </div>

                  <button
                    className="text-emerald-400 focus:outline-none text-lg font-semibold"
                    onClick={handleSelectYear}
                  >
                    Select Year
                  </button>
                </div>
              </div>
              <div className="pt-2">
                <TransactionTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
