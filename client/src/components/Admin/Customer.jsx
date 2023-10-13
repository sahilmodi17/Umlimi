import React, { useEffect } from "react";

import { useUserContext } from "../../Context";
import { AdminNavbar } from "./Sidebar";

const Customer = () => {
  const { setSidebar } = useUserContext();

  useEffect(() => {
    setSidebar("Customer");
  }, []);

  return (
    <>
      <div className=' flex h-[140vh] w-[80%]'>
        <div className='container   bg-emerald-100'>
          <AdminNavbar />

          <div className='flex flex-wrap ml-5 '>
            
            <div className='w-[95%] h-[123vh] bg-white rounded-2xl shadow ml-2'>
              <div className=''>
              <input
                className='w-96 h-10 bg-white border border-zinc-500 rounded-lg pl-2 '
                placeholder='Search for items...'
              />
            </div>
              {/*Erase The below 3 line  */}
              <div className='text-5xl flex justify-center items-center h-full'>
                Customer Page Coming Soon...
              </div>

              {/* Write Your Code here  */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Customer;
