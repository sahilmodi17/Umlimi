import React, { useEffect } from "react";

import { useUserContext } from "../../Context";
import { FiUpload } from 'react-icons/fi'
import { AdminNavbar } from "./Sidebar";
import TransactionTable from "./TransactionTable";

const Transaction = () => {
  const { setSidebar,allOrders } = useUserContext();

  useEffect(() => {
    setSidebar("Transaction");
  }, []);

  //  const totalProducts = allOrders.reduce(
  //    (acc, order) => acc + order.products.length,
  //    0
  //  )

  return (
    <>
      <div className=' flex min-h-[100vh] w-[80%]'>
        <div className='container  bg-emerald-100'>
          <AdminNavbar />

          <div className='flex flex-wrap ml-5 '>
            <div className='w-[95%] min-h-[87vh] bg-white rounded-2xl shadow ml-2 p-5 pt-3'>
              <div className='h-16 items-center flex justify-between'>
                <div className='text-neutral-600 text-2xl font-bold  '>
                  {/* Total Products: {totalProducts} */}
                </div>
                <div className=''>
                  <input
                    className='w-96 h-10 bg-white border border-zinc-500 rounded-lg pl-2 '
                    placeholder='Search for items...'
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                    }}
                  />
                </div>
                <div className='w-[40%] flex justify-around items-center  mr-3'>
                  <div className='text-emerald-400 flex items-center'>
                    <FiUpload className='mr-1' />
                    <div className=' text-base font-medium'>Export</div>
                  </div>

                  <div>This Year</div>
                </div>
              </div>
              <div className='pt-2'>
                <TransactionTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Transaction;
