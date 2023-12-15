import React from 'react'
import { useNavigate } from 'react-router-dom'

function Splash() {

    const navigateTo = useNavigate()

  return (
    <div className='bg-green-200 bg-opacity-80 h-[100vh] w-[100vw]'>
      <div className='flex justify-end items-center'>
        <img className='h-80' src='/images/Hreo-img.png' />
      </div>
      <div className='w-96 px-40 text-slate-700 text-8xl font-bold'>
        Welcome to Umlimi
      </div>
      <div className='text-zinc-500 text-xl font-medium px-40'>
        Save up to 60% off on your first order
      </div>
      <div className='flex px-40 pt-14 gap-5'>
        <button
          type='button'
          className='w-48 h-16 bg-white bg-opacity-80 shadow border border-black'
          onClick={() => navigateTo("/register")}
        >
          {' '}
          Create an Account
        </button>
        <button
          type='button'
          className='w-48 h-16 bg-white bg-opacity-80 shadow border border-black'
          onClick={() => navigateTo("/login")}
        >
          {' '}
          Login
        </button>
      </div>
    </div>
  )
}

export default Splash

// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// function Splash() {
//   const navigateTo = useNavigate()

//   return (
//     <div className='bg-green-200 bg-opacity-80 min-h-screen w-screen flex flex-col justify-between'>
//       <div className='flex justify-end mt-4 md:mt-8 lg:mt-12'>
//         <img
//           className='h-1/2 md:h-3/5 lg:h-2/3 xl:h-80 self-end'
//           src='/images/Hreo-img.png'
//           alt='Hero'
//         />
//       </div>
//       <div className='flex flex-col'>
//         <div className='text-center w-96 text-slate-700 text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mt-2 md:mt-4 lg:mt-6 px-4 md:px-16 lg:px-40 xl:px-60'>
//           Welcome to Umlimi
//         </div>
//         <div className='text-center text-zinc-500 text-base md:text-lg lg:text-xl xl:text-2xl font-medium mt-2 md:mt-4 lg:mt-6 px-4 md:px-16 lg:px-40 xl:px-60'>
//           Save up to 60% off on your first order
//         </div>
//         <div className='flex flex-col mt-2 md:mt-4 lg:mt-6 px-4 md:px-16 lg:px-40 xl:px-60 gap-3 md:gap-4 lg:gap-5'>
//           <button
//             type='button'
//             className='w-full md:w-48 lg:w-60 xl:w-64 h-10 md:h-12 lg:h-14 xl:h-16 bg-white bg-opacity-80 shadow border border-black'
//             onClick={() => navigateTo('/register')}
//           >
//             Create an Account
//           </button>
//           <button
//             type='button'
//             className='w-full md:w-48 lg:w-60 xl:w-64 h-10 md:h-12 lg:h-14 xl:h-16 bg-white bg-opacity-80 shadow border border-black'
//             onClick={() => navigateTo('/login')}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Splash


