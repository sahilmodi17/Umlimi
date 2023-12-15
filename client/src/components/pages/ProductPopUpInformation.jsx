import React, { useState } from "react";
import axios from "axios";
import { useUserContext } from "../../Context";

const ProductPopUpInformation = ({ onClose, product }) => {
  const [isOpen, setIsOpen] = useState(true);
  // console.log(product);
  const handleCancel = () => {
    setIsOpen(false);
    onClose(); // Call the onClose function passed from the parent component
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-[40vw]  border-4">
            {/* Modal content */}
            <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-blueGray-200 rounded-t">
                <h3
                  className="text-3xl font-semibold text-gray-700"
                  id="modal-title"
                >
                  Information
                </h3>
              </div>

              <div className="flex justify-center items-center overflow-">
                {product}
              </div>

              <div className="flex items-center justify-end p-6  rounded-b">
                <button
                  className=" text-black active:bg-blueGray-50 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-emerald-300"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPopUpInformation;
