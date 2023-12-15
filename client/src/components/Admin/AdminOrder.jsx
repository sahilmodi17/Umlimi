// AdminOrder.jsx
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../Context";
import { AdminNavbar } from "./Sidebar";
import OrderTable from "./OrderTable";
import { FiUpload } from "react-icons/fi";
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";

const AdminOrder = () => {
  const { setSidebar, allOrders, setSearchTerm } = useUserContext();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setSidebar("Orders");
  }, [allOrders]);

  const filterOrdersByYear = (year) => {
    return allOrders.filter(
      (order) =>
        new Date(order.orderDate).getFullYear() === year &&
        order.products.some((product) =>
          product.productId?.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
    );
  };

  const exportToExcel = async () => {
    const filteredOrders = filterOrdersByYear(selectedYear);
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(`Orders_${selectedYear}`);

    // Add header row
    worksheet.addRow([
      "SR No",
      "Order ID",
      "Customer Email",
      "Full Name",
      "Product Name",
      "Order Date",
    ]);

    // Add data rows
    filteredOrders.forEach((order, index) => {
      order.products.forEach((product) => {
        worksheet.addRow([
          product._id,
          order._id,
          order.userId.email,
          `${order.userId.firstName} ${order.userId.lastName}`,
          product.productId?.name,
          new Date(order.orderDate).toLocaleDateString(),
        ]);
      });
    });

    // Save the workbook
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `orders_${selectedYear}.xlsx`);
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

          <div className="flex flex-wrap ml-5">
            <div className="w-[95%] min-h-[87vh] bg-white rounded-2xl shadow ml-2 p-5 pt-3">
              <div className="h-16 items-center flex justify-between">
                <div className="text-neutral-600 text-2xl font-bold  ">
                  Total Products:{" "}
                  {allOrders.reduce(
                    (acc, order) => acc + order.products.length,
                    0
                  )}
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
                    onClick={exportToExcel}
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
                <OrderTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrder;
