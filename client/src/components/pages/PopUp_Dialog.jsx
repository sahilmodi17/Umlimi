import React, { useState } from "react";
import axios from "axios";
import { useUserContext } from "../../Context";
const PopUp_Dialog = ({ onClose }) => {
  const { email, setOTP } = useUserContext();

  const [isOpen, setIsOpen] = useState(true);
  const [verificationCode, setVerificationCode] = useState("");

  const handleCancel = () => {
    setIsOpen(false);
    onClose(); // Call the onClose function passed from the parent component
  };
  const handleVerify = async () => {
    try {
      const data = { otp: verificationCode, email }; // Change verificationCode to otp
      const res = await axios.post("/api/v1/auth/user/verify", data);
      // console.log(res.data.msg); // Use res.data.msg to access the response message
      // console.log("Verification Code:", verificationCode);

      if (res.data.msg === "Verification successful") {
        setOTP(verificationCode);
        setIsOpen(false);
        onClose(); // Call the onClose function passed from the parent component
      } else {
        alert("provide correct verification code");
      }
    } catch (error) {
      console.log(error);
    }
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
          <div className="relative w-auto max-w-lg">
            {/* Modal content */}
            <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold" id="modal-title">
                  Email Verification
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={handleCancel}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <p
                  className="my-4  text-lg leading-relaxed"
                  style={{ color: "grey" }}
                >
                  We have sent a verification code to the given Email Id
                  <span className="text-emerald-600"> "{email}" </span> Please
                  enter the code here to verify.
                </p>
                <h1>Verification Code</h1>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="w-1/2 mx-auto text-center mt-2 border rounded-lg p-2"
                  placeholder="Enter code"
                />
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className=" text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  style={{ backgroundColor: "rgb(59,183,126)" }}
                  type="button"
                  onClick={() => {
                    handleVerify();
                    // Add your deactivate logic here
                  }}
                >
                  Verify
                </button>
                <button
                  className="bg-white text-black active:bg-blueGray-50 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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

export default PopUp_Dialog;
