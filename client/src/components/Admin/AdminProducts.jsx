import React, { useEffect, useState } from "react";
import { useUserContext } from "../../Context";
import { AdminNavbar } from "./Sidebar";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ProductTable from "./ProductTable";
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";

const AdminProducts = () => {
  const { setSidebar, setSearchTerm, allProducts } = useUserContext();
  const navigateTo = useNavigate();

  useEffect(() => {
    setSidebar("Configuration");
  }, []);

  const totalProducts = allProducts.length;

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Products");

    // Add header row
    worksheet.addRow([
      "Sr No",
      "Category",
      "Product Name",
      "Information",
      "Photo",
    ]);

    // Add data rows
    allProducts.forEach((product, index) => {
      worksheet.addRow([
        index + 1,
        product.category,
        product.name,
        product.description,
        product.image1,
      ]);
    });

    // Save the workbook
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "products.xlsx");
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
                  All sections
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
                  <div className="">
                    <button
                      className="bg-emerald-400 rounded-md p-[0.35rem] px-4"
                      onClick={() => navigateTo("/admin/addproduct")}
                    >
                      Add Product
                    </button>
                  </div>
                  <div
                    className="text-emerald-400 flex items-center cursor-pointer"
                    onClick={exportToExcel}
                  >
                    <FiUpload className="mr-1" />
                    <div className="text-base font-medium">Export</div>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <ProductTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
