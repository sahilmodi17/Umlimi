import React, { useEffect } from "react";
import { useUserContext } from "../../Context";
import { AdminNavbar } from "./Sidebar";
import { FiUpload } from "react-icons/fi";
import CustomerTable from "./CustomerTable";
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";

const Customer = () => {
  const { setSidebar, allUsers, setSearchTerm } = useUserContext();

  useEffect(() => {
    setSidebar("Customer");
  }, [allUsers]);

  const totalUsers = allUsers.length;

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Customers");

    // Add header row
    worksheet.addRow([
      "Sr No",
      "First Name",
      "Last Name",
      "Email",
      "Customer Id",
    ]);

    // Add data rows
    allUsers.forEach((user, index) => {
      worksheet.addRow([
        index + 1,
        user.firstName,
        user.lastName,
        user.email,
        user._id,
      ]);
    });

    // Save the workbook
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "customers.xlsx");
  };

  return (
    <>
      <div className="flex min-h-[100vh] w-[80%]">
        <div className="container bg-emerald-100">
          <AdminNavbar />

          <div className="mt-10 flex flex-wrap ml-5">
            <div className="w-[95%] min-h-[87vh] bg-white rounded-2xl shadow ml-2 p-5 pt-3">
              <div className="h-16 items-center flex justify-between">
                <div className="text-neutral-600 text-2xl font-bold  ">
                  Total {totalUsers} Customers
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
                <div className="w-[20%] flex justify-around items-center  mr-3">
                  <div
                    className="text-emerald-400 flex items-center cursor-pointer"
                    onClick={exportToExcel}
                  >
                    <FiUpload className="mr-1" />
                    <div className=" text-base font-medium">Export</div>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <CustomerTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
