import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../Context'
const Success = () => {
  const { userId } = useUserContext()
  
  const navigateTo = useNavigate()
  return (
    <div className='m-5 sm:m-6 lg:m-10 sm:p-6 lg:p-10 rounded-sm shadow'>
      <div className='bg-green-50 rounded-sm border border-black p-5 sm:p-10 lg:p-12 flex flex-col items-center justify-center'>
        <div className='text-zinc-800 text-2xl font-semibold font-quicksand leading-9 p-5'>
          Congratulations...! Your order is successfully placed
        </div>
        <div>
          <button
            className='bg-white rounded-sm border border-emerald-400 w-full md:w-32 lg:w-40 hover:cursor-pointer'
            onClick={() => navigateTo('/')}
          >
            <div className='text-emerald-400 text-lg md:text-xl lg:text-2xl font-normal p-2'>
              Explore more products
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Success
