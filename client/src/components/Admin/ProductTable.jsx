import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ProductPopUpInformation from "../pages/ProductPopUpInformation";
import ProductPopUpPhoto from "../pages/ProductPopUpPhoto";

const ProductTable = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal1 = (productId) => {
    setSelectedProduct(productId);
    setIsModalOpen1(true);
  };

  const openModal2 = (productId) => {
    setSelectedProduct(productId);
    setIsModalOpen2(true);
  };

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/admin/getAllProducts");
      setAllProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left ">
          <thead className=" text-gray-700 bg-zinc-200 rounded-lg text-xl font-medium font-['Roboto']">
            <tr>
              <th scope="col" className="px-6 py-3  ">
                Sr No
              </th>
              <th scope="col" className="px-6 py-3 ">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Information
              </th>
              <th scope="col" className="px-6 py-3">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, index) => {
              return (
                <tr
                  className="border-b border-gray-200 font-semibold text-lg "
                  key={product._id}
                >
                  <td scope="row" className="px-6 py-2">
                    {index + 1}
                  </td>
                  <td className="px-6 py-2">{product.category}</td>
                  <td className="px-6 py-2">{product.name}</td>
                  <td className="px-6 py-2">
                    <div
                      onClick={() => openModal1(product._id)}
                      className="cursor-pointer"
                    >
                      Info
                    </div>
                    {isModalOpen1 && selectedProduct === product._id && (
                      <ProductPopUpInformation
                        onClose={() => setIsModalOpen1(false)}
                        product={product.description}
                      />
                    )}
                  </td>
                  <td className="px-6 py-2">
                    <div
                      onClick={() => openModal2(product._id)}
                      className="cursor-pointer"
                    >
                      Photo
                    </div>
                    {isModalOpen2 && selectedProduct === product._id && (
                      <ProductPopUpPhoto
                        onClose={() => setIsModalOpen2(false)}
                        product={product.image1}
                      />
                    )}
                  </td>
                  <td className="px-6 py-2">
                    <div className="flex">
                      <MdModeEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
