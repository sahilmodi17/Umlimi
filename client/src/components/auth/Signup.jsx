import React from 'react'

const Signup = () => {
  return (
    <>
      <div className='w-full pt-10 px-4 md:px-8 lg:px-16 flex flex-col items-center'>
        {/* Title */}
        <div className='mb-4 text-center'>
          <span className='text-black text-3xl md:text-4xl lg:text-5xl font-semibold'>
            Welcome to{' '}
          </span>
          <span className='text-emerald-400 text-3xl md:text-4xl lg:text-5xl font-semibold'>
            Umlimi
          </span>
        </div>

        <div className='pt-3 w-full md:w-[60%] lg:w-[40%] '>
          {/* Name Fields */}
          <div className='flex  md:flex-row gap-5 md:gap-8'>
            <div className='w-[100%]'>
              <div className='text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold'>
                First Name
              </div>
              <input
                type='text'
                name='first_name'
                className='bg-white w-full rounded border border-zinc-500 h-12 px-3'
                placeholder='Mehrab'
              />
            </div>
            <div className='w-[100%]'>
              <div className='text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold'>
                Last Name
              </div>
              <input
                type='text'
                name='last_name'
                className='bg-white w-full rounded border border-zinc-500 h-12 px-3'
                placeholder='Bozorgi'
              />
            </div>
          </div>

          {/* Email */}
          <div className='pt-5'>
            <div className='text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold'>
              Email
            </div>
            <input
              type='email'
              name='email'
              className='bg-white w-full rounded border border-zinc-500 h-12 px-3'
              placeholder='Mehrabbozorgi.business@gmail.com'
            />
          </div>

          {/* Password */}
          <div className='pt-5'>
            <div className='text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold'>
              Set Password
            </div>
            <input
              type='password'
              name='password'
              className='bg-white w-full rounded border border-zinc-500 h-12 px-3'
              placeholder='Enter your password'
            />
          </div>

          {/* Confirm Password */}
          <div className='pt-5'>
            <div className='text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold'>
              Confirm Password
            </div>
            <input
              type='password'
              name='confirm_password'
              className='bg-white w-full rounded border border-zinc-500 h-12 px-3'
              placeholder='Confirm your password'
            />
          </div>

          {/* Gender and DOB */}
          <div className='flex flex-col md:flex-row md:gap-8 pt-5'>
            <div className='w-full'>
              <div className='text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold'>
                Gender
              </div>
              <input
                type='text'
                name='gender'
                className='bg-white w-full rounded border border-zinc-500 h-12 px-3'
                placeholder='male/female'
              />
            </div>
            <div className='w-full'>
              <div className='text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold'>
                D.O.B
              </div>
              <input
                type='date'
                name='dob'
                className='bg-white w-full rounded border border-zinc-500 h-12 px-3'
                placeholder='Enter your birth date'
              />
            </div>
          </div>

          {/* Buttons */}
          <div className='mt-6 flex flex-col md:flex-row md:justify-center md:items-center gap-4'>
            <button
              type='button'
              className='bg-white rounded-sm border border-emerald-400 w-full md:w-32 lg:w-40 hover:cursor-pointer'
              onClick={() => handleCancel()}
            >
              <div className='text-emerald-400 text-lg md:text-xl lg:text-2xl font-normal p-2'>
                Cancel
              </div>
            </button>
            <button
              type='button'
              className='bg-emerald-400 rounded-sm w-full md:w-32 lg:w-40 hover:cursor-pointer'
              onClick={() => handleLogin()}
            >
              <div className='text-white text-lg md:text-xl lg:text-2xl font-semibold p-2'>
                Log in
              </div>
            </button>
          </div>

          {/* Login Prompt */}
          <div className='mt-4 text-center'>
            <span className='text-black text-lg md:text-xl lg:text-2xl font-semibold'>
              Already have an account?{' '}
            </span>
            <span className='text-emerald-400 text-lg md:text-xl lg:text-2xl font-semibold'>
              Log in
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='pt-10 flex justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1600'
          height='3'
          viewBox='0 0 1202 2'
          fill='none'
        >
          <path
            d='M1 1H1201'
            stroke='black'
            stroke-opacity='0.2'
            stroke-width='5'
            stroke-linecap='round'
          />
        </svg>
      </div>

      <div className='w-full h-96 px-20 pt-10 flex justify-between'>
        <div className='w-96 pt-16 flex flex-col'>
          <div className='pt-5 relative'>
            <div className='w-20 h-5 left-0 top-0 absolute justify-start items-center gap-0.5 inline-flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M9 1.5C7.4087 1.5 5.88258 2.13214 4.75736 3.25736C3.63214 4.38258 3 5.9087 3 7.5C3 9.82354 4.5118 12.0782 6.16946 13.8279C6.98296 14.6866 7.799 15.3896 8.41251 15.8781C8.64084 16.0599 8.84027 16.2114 9 16.3294C9.15973 16.2114 9.35916 16.0599 9.58749 15.8781C10.201 15.3896 11.017 14.6866 11.8305 13.8279C13.4882 12.0782 15 9.82354 15 7.5C15 5.9087 14.3679 4.38258 13.2426 3.25736C12.1174 2.13214 10.5913 1.5 9 1.5ZM9 17.25C8.58397 17.874 8.58379 17.8739 8.58357 17.8738L8.58143 17.8723L8.57643 17.869L8.55924 17.8574C8.54464 17.8474 8.52381 17.8332 8.49717 17.8147C8.4439 17.7778 8.36735 17.7241 8.27084 17.6544C8.07791 17.5151 7.80477 17.3117 7.47812 17.0516C6.826 16.5323 5.95454 15.7821 5.08054 14.8596C3.3632 13.0468 1.5 10.4265 1.5 7.5C1.5 5.51088 2.29018 3.60322 3.6967 2.1967C5.10322 0.790176 7.01088 0 9 0C10.9891 0 12.8968 0.790176 14.3033 2.1967C15.7098 3.60322 16.5 5.51088 16.5 7.5C16.5 10.4265 14.6368 13.0468 12.9195 14.8596C12.0455 15.7821 11.174 16.5323 10.5219 17.0516C10.1952 17.3117 9.92209 17.5151 9.72916 17.6544C9.63265 17.7241 9.5561 17.7778 9.50283 17.8147C9.47619 17.8332 9.45536 17.8474 9.44076 17.8574L9.42357 17.869L9.41857 17.8723L9.41699 17.8734C9.41678 17.8735 9.41603 17.874 9 17.25ZM9 17.25L9.41603 17.874C9.1641 18.042 8.83549 18.0417 8.58357 17.8738L9 17.25Z'
                  fill='#3BB77E'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M9 6C8.17157 6 7.5 6.67157 7.5 7.5C7.5 8.32843 8.17157 9 9 9C9.82843 9 10.5 8.32843 10.5 7.5C10.5 6.67157 9.82843 6 9 6ZM6 7.5C6 5.84315 7.34315 4.5 9 4.5C10.6569 4.5 12 5.84315 12 7.5C12 9.15685 10.6569 10.5 9 10.5C7.34315 10.5 6 9.15685 6 7.5Z'
                  fill='#3BB77E'
                />
              </svg>
              <div className='text-slate-700 text-base font-semibold'>
                Address:
              </div>
            </div>
            <div className='left-[93px] top-0 absolute text-slate-700 text-base font-medium'>
              1762 School House Road
            </div>
          </div>

          <div className=' pt-5 relative '>
            <div className='flex gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='21'
                height='20'
                viewBox='0 0 21 20'
                fill='none'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3.26339 3.40638L3.32384 3.3432C4.93003 1.73687 5.97599 1.3111 7.09201 1.95286C7.41304 2.13746 7.714 2.39586 8.12324 2.81151L9.37855 4.1132C10.0719 4.86978 10.2295 5.59549 10.0038 6.44538L9.97265 6.55789L9.93813 6.66977L9.77032 7.16212C9.41114 8.26627 9.56109 8.88924 10.839 10.1668C12.1679 11.4954 12.7883 11.6041 13.9776 11.1885L14.1895 11.1148L14.4458 11.0316L14.558 11.0004C15.4614 10.7594 16.2245 10.9518 17.0338 11.7605L18.0452 12.7375L18.343 13.0303C18.6731 13.3669 18.8912 13.6337 19.0524 13.9156C19.6901 15.0313 19.2639 16.0766 17.6114 17.7229L17.4542 17.8822C17.2074 18.12 16.9769 18.2904 16.6383 18.4512C16.0698 18.7211 15.3983 18.8228 14.6179 18.7143C12.6951 18.4469 10.2563 16.9297 7.16602 13.8402C6.91447 13.5887 6.67354 13.3421 6.44299 13.1002L5.99568 12.6228C1.80414 8.06888 1.43436 5.27141 3.1521 3.51692L3.26339 3.40638ZM7.11146 3.56727C6.83997 3.29962 6.64275 3.13645 6.46888 3.03647C6.08428 2.8153 5.66903 2.90879 4.90053 3.57023L4.65906 3.78596C4.61694 3.82484 4.57386 3.8652 4.52977 3.90707L4.25288 4.17676L4.22793 4.20794L4.04021 4.39653C3.58659 4.85987 3.37171 5.42537 3.55687 6.3979C3.86071 7.99375 5.25147 10.1586 8.04979 12.9562C10.9655 15.8712 13.1871 17.2533 14.7901 17.4762C15.7246 17.6062 16.2013 17.3798 16.6874 16.8818L17.0581 16.5077C17.232 16.3258 17.3805 16.1609 17.5059 16.0103L17.677 15.7948C18.1142 15.2124 18.1541 14.863 17.9672 14.5359C17.896 14.4114 17.7925 14.275 17.6419 14.1082L17.4375 13.8924L17.3166 13.7713L16.0405 12.5392C15.6141 12.1459 15.3227 12.0901 14.8803 12.2082L14.7525 12.2449L14.224 12.4244C12.6905 12.9196 11.5843 12.6795 9.95523 11.0508C8.26803 9.36404 8.07016 8.23765 8.63547 6.61581L8.67174 6.51159L8.77202 6.20945L8.82131 6.01686C8.90873 5.59772 8.80893 5.30548 8.35836 4.85484C8.33981 4.83629 8.31908 4.81539 8.29651 4.79251L7.11146 3.56727Z'
                  fill='#3BB77E'
                />
              </svg>
              <div className='text-slate-700 text-base font-semibold'>
                Call Us:
              </div>
            </div>
            <div className='pt-5 left-[90px] top-0 absolute text-slate-700 text-base font-medium'>
              1233-777
            </div>
          </div>

          <div className='pt-5 relative '>
            <div className='flex gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3 3.75C2.58921 3.75 2.25 4.08921 2.25 4.5V13.5C2.25 13.9108 2.58921 14.25 3 14.25H15C15.4108 14.25 15.75 13.9108 15.75 13.5V4.5C15.75 4.08921 15.4108 3.75 15 3.75H3ZM0.75 4.5C0.75 3.26079 1.76079 2.25 3 2.25H15C16.2392 2.25 17.25 3.26079 17.25 4.5V13.5C17.25 14.7392 16.2392 15.75 15 15.75H3C1.76079 15.75 0.75 14.7392 0.75 13.5V4.5Z'
                  fill='#3BB77E'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M0.88564 4.06997C1.12318 3.73063 1.59082 3.6481 1.93016 3.88564L9.00006 8.83457L16.07 3.88564C16.4093 3.6481 16.877 3.73063 17.1145 4.06997C17.352 4.4093 17.2695 4.87695 16.9302 5.11449L9.43016 10.3645C9.17192 10.5453 8.82821 10.5453 8.56997 10.3645L1.06997 5.11449C0.730631 4.87695 0.648105 4.4093 0.88564 4.06997Z'
                  fill='#3BB77E'
                />
              </svg>
              <div className='text-slate-700 text-base font-semibold'>
                Email:
              </div>
            </div>
            <div className='pt-5 left-[85px] top-0 absolute text-slate-700 text-base font-medium'>
              groceyish@contact.com
            </div>
          </div>
          <div className='pt-5 relative '>
            <div className='flex gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <g clip-path='url(#clip0_569_3093)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9Z'
                    fill='#3BB77E'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9 3.75C9.41421 3.75 9.75 4.08579 9.75 4.5V9C9.75 9.41421 9.41421 9.75 9 9.75H5.625C5.21079 9.75 4.875 9.41421 4.875 9C4.875 8.58579 5.21079 8.25 5.625 8.25H8.25V4.5C8.25 4.08579 8.58579 3.75 9 3.75Z'
                    fill='#3BB77E'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_569_3093'>
                    <rect width='18' height='18' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <div className='text-slate-700 text-base font-semibold'>
                Work hours:
              </div>
            </div>
            <div className='pt-5 left-[125px] top-0 absolute text-slate-700 text-base font-medium'>
              8:00 - 20:00, Sunday - Thursday
            </div>
          </div>
        </div>

        <div className='flex-col justify-start items-start gap-9 inline-flex'>
          <div className='text-slate-700 text-2xl font-semibold'>Account</div>
          <div className='w-32 flex-col justify-between items-start gap-3.5 flex'>
            <div className='text-slate-700 text-base font-medium'>Wishlist</div>
            <div className='text-slate-700 text-base font-medium'>Cart</div>
            <div className='text-slate-700 text-base font-medium'>
              Track Order
            </div>
            <div className='text-slate-700 text-base font-medium'>
              Shipping Details
            </div>
          </div>
        </div>
        <div className='h-56 flex-col justify-between items-start gap-9 inline-flex'>
          <div className='text-slate-700 text-2xl font-semibold'>
            Useful links
          </div>
          <div className='w-28   flex-col justify-between items-start gap-3.5 flex'>
            <div className='text-slate-700 text-base font-medium'>About Us</div>
            <div className='text-slate-700 text-base font-medium'>Contact</div>
            <div className='text-slate-700 text-base font-medium'>
              Hot deals
            </div>
            <div className='text-slate-700 text-base font-medium'>
              Promotions
            </div>
            <div className='text-slate-700 text-base font-medium'>
              New products
            </div>
          </div>
        </div>
        <div className='h-64 flex-col justify-between items-start gap-9 inline-flex'>
          <div className='text-slate-700 text-2xl font-semibold'>
            Help Center
          </div>
          <div className='w-24 flex-col justify-between items-start gap-3.5 flex'>
            <div className='text-slate-700 text-base font-medium'>Payments</div>
            <div className='text-slate-700 text-base font-medium'>Refund</div>
            <div className='text-slate-700 text-base font-medium'>Checkout</div>
            <div className='text-slate-700 text-base font-medium'>Shipping</div>
            <div className='text-slate-700 text-base font-medium'>Q&A</div>
            <div className='text-slate-700 text-base font-medium'>
              Privacy Policy
            </div>
          </div>
        </div>
      </div>

      <div className='pt-5 flex justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1600'
          height='3'
          viewBox='0 0 1202 2'
          fill='none'
        >
          <path
            d='M1 1H1201'
            stroke='black'
            stroke-opacity='0.2'
            stroke-width='5'
            stroke-linecap='round'
          />
        </svg>
      </div>

      <div className='w-full px-20  h-32 justify-between items-center gap-64 inline-flex '>
        <div className='text-slate-700 text-base font-medium'>
          © 2022, All rights reserved
        </div>
        <img className='w-56 h-8' src='/images/Payment.png' />
        <div className='h-14 p-1.5 justify-between items-start gap-7 flex'>
          <div className='w-11 h-11 relative'>
            <div className='w-11 h-11 left-0 top-0 absolute bg-emerald-400 rounded-full' />
            <div className='w-6 h-6 left-[10px] top-[10px] absolute'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M9.69641 13.2478C9.62441 13.2478 8.04041 13.2478 7.32041 13.2478C6.93641 13.2478 6.81641 13.1038 6.81641 12.7438C6.81641 11.7838 6.81641 10.7998 6.81641 9.83983C6.81641 9.45583 6.96041 9.33583 7.32041 9.33583H9.69641C9.69641 9.26383 9.69641 7.87183 9.69641 7.22383C9.69641 6.26383 9.86441 5.35183 10.3444 4.51183C10.8484 3.64783 11.5684 3.07183 12.4804 2.73583C13.0804 2.51983 13.6804 2.42383 14.3284 2.42383H16.6804C17.0164 2.42383 17.1604 2.56783 17.1604 2.90383V5.63983C17.1604 5.97583 17.0164 6.11983 16.6804 6.11983C16.0324 6.11983 15.3844 6.11983 14.7364 6.14383C14.0884 6.14383 13.7524 6.45583 13.7524 7.12783C13.7284 7.84783 13.7524 8.54383 13.7524 9.28783H16.5364C16.9204 9.28783 17.0644 9.43183 17.0644 9.81583V12.7198C17.0644 13.1038 16.9444 13.2238 16.5364 13.2238C15.6724 13.2238 13.8244 13.2238 13.7524 13.2238V21.0478C13.7524 21.4558 13.6324 21.5998 13.2004 21.5998C12.1924 21.5998 11.2084 21.5998 10.2004 21.5998C9.84041 21.5998 9.69641 21.4558 9.69641 21.0958C9.69641 18.5758 9.69641 13.3198 9.69641 13.2478Z'
                  fill='white'
                />
              </svg>
            </div>
          </div>
          <div className='w-11 h-11 relative'>
            <div className='w-11 h-11 left-0 top-0 absolute bg-emerald-400 rounded-full' />
            <div className='w-6 h-6 left-[10px] top-[10px] absolute'>
              <div className='w-5 h-5 left-[2.40px] top-[2.40px] absolute'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='24'
                  viewBox='0 0 25 24'
                  fill='none'
                >
                  <path
                    d='M21.9353 21.5997V14.5677C21.9353 11.1117 21.1913 8.47168 17.1593 8.47168C15.2153 8.47168 13.9193 9.52768 13.3913 10.5357H13.3433V8.78368H9.52734V21.5997H13.5113V15.2397C13.5113 13.5597 13.8233 11.9517 15.8873 11.9517C17.9273 11.9517 17.9513 13.8477 17.9513 15.3357V21.5757H21.9353V21.5997Z'
                    fill='white'
                  />
                  <path
                    d='M3.04688 8.78369H7.03087V21.5997H3.04688V8.78369Z'
                    fill='white'
                  />
                  <path
                    d='M5.03838 2.3999C3.76638 2.3999 2.73438 3.4319 2.73438 4.7039C2.73438 5.9759 3.76638 7.0319 5.03838 7.0319C6.31038 7.0319 7.34238 5.9759 7.34238 4.7039C7.34238 3.4319 6.31038 2.3999 5.03838 2.3999Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='w-11 h-11 relative'>
            <div className='w-11 h-11 left-0 top-0 absolute bg-emerald-400 rounded-full' />
            <div className='w-6 h-6 left-[10px] top-[10px] absolute'>
              <div className='w-6 h-6 left-[0.02px] top-0 absolute'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 25 25'
                  fill='none'
                >
                  <g clip-path='url(#clip0_569_3140)'>
                    <path
                      d='M24.664 7.06849C24.6077 5.79103 24.4011 4.91279 24.1052 4.15179C23.7999 3.34399 23.3302 2.62078 22.7149 2.01957C22.1137 1.409 21.3857 0.934565 20.5873 0.634051C19.8219 0.338124 18.9482 0.131544 17.6707 0.0752201C16.3837 0.0141267 15.9752 0 12.711 0C9.4468 0 9.03822 0.0141267 7.75599 0.0704501C6.47853 0.126773 5.60029 0.333537 4.83947 0.629281C4.03149 0.934565 3.30828 1.40423 2.70707 2.01957C2.0965 2.62078 1.62225 3.34876 1.32155 4.1472C1.02562 4.91279 0.819044 5.78626 0.76272 7.06372C0.701627 8.35072 0.6875 8.7593 0.6875 12.0235C0.6875 15.2877 0.701627 15.6962 0.75795 16.9785C0.814273 18.2559 1.02104 19.1342 1.31696 19.8952C1.62225 20.703 2.0965 21.4262 2.70707 22.0274C3.30828 22.638 4.03626 23.1124 4.8347 23.4129C5.60029 23.7088 6.47376 23.9154 7.75141 23.9717C9.03345 24.0283 9.44221 24.0422 12.7064 24.0422C15.9706 24.0422 16.3792 24.0283 17.6614 23.9717C18.9388 23.9154 19.8171 23.7088 20.5779 23.4129C22.1937 22.7882 23.4711 21.5108 24.0958 19.8952C24.3916 19.1296 24.5983 18.2559 24.6547 16.9785C24.711 15.6962 24.7251 15.2877 24.7251 12.0235C24.7251 8.7593 24.7203 8.35072 24.664 7.06849ZM22.499 16.8845C22.4472 18.0587 22.25 18.6928 22.0856 19.1155C21.6816 20.1629 20.8504 20.9941 19.803 21.3981C19.3803 21.5625 18.7416 21.7597 17.572 21.8113C16.3039 21.8678 15.9236 21.8817 12.7158 21.8817C9.50789 21.8817 9.1228 21.8678 7.85928 21.8113C6.68511 21.7597 6.05106 21.5625 5.62836 21.3981C5.10714 21.2055 4.63271 20.9002 4.24761 20.501C3.8484 20.1111 3.54311 19.6415 3.35048 19.1202C3.18609 18.6975 2.98887 18.0587 2.93732 16.8893C2.88081 15.6212 2.86687 15.2407 2.86687 12.0328C2.86687 8.82498 2.88081 8.43989 2.93732 7.17655C2.98887 6.00239 3.18609 5.36833 3.35048 4.94563C3.54311 4.42423 3.8484 3.94998 4.25238 3.5647C4.64206 3.16548 5.11173 2.8602 5.63313 2.66775C6.05583 2.50336 6.69465 2.30614 7.86405 2.2544C9.13216 2.19808 9.51266 2.18395 12.7203 2.18395C15.933 2.18395 16.3133 2.19808 17.5768 2.2544C18.751 2.30614 19.385 2.50336 19.8077 2.66775C20.329 2.8602 20.8034 3.16548 21.1885 3.5647C21.5877 3.95456 21.893 4.42423 22.0856 4.94563C22.25 5.36833 22.4472 6.00697 22.499 7.17655C22.5553 8.44466 22.5694 8.82498 22.5694 12.0328C22.5694 15.2407 22.5553 15.6164 22.499 16.8845Z'
                      fill='white'
                    />
                    <path
                      d='M12.7113 5.84717C9.30161 5.84717 6.53516 8.61344 6.53516 12.0233C6.53516 15.4332 9.30161 18.1994 12.7113 18.1994C16.1211 18.1994 18.8874 15.4332 18.8874 12.0233C18.8874 8.61344 16.1211 5.84717 12.7113 5.84717ZM12.7113 16.0296C10.4993 16.0296 8.70498 14.2355 8.70498 12.0233C8.70498 9.81109 10.4993 8.01699 12.7113 8.01699C14.9235 8.01699 16.7176 9.81109 16.7176 12.0233C16.7176 14.2355 14.9235 16.0296 12.7113 16.0296Z'
                      fill='white'
                    />
                    <path
                      d='M20.5733 5.60297C20.5733 6.39921 19.9277 7.04482 19.1313 7.04482C18.3351 7.04482 17.6895 6.39921 17.6895 5.60297C17.6895 4.80656 18.3351 4.16113 19.1313 4.16113C19.9277 4.16113 20.5733 4.80656 20.5733 5.60297Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_569_3140'>
                      <rect
                        width='24'
                        height='24.0423'
                        fill='white'
                        transform='translate(0.666016)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className='w-11 h-11 relative'>
            <div className='w-11 h-11 left-0 top-0 absolute bg-emerald-400 rounded-full' />
            <div className='w-6 h-6 left-[10px] top-[10px] absolute'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <g clip-path='url(#clip0_569_3147)'>
                  <path
                    d='M24 4.5585C23.1075 4.95 22.1565 5.2095 21.165 5.3355C22.185 4.7265 22.9635 3.7695 23.3295 2.616C22.3785 3.183 21.3285 3.5835 20.2095 3.807C19.3065 2.8455 18.0195 2.25 16.6155 2.25C13.8915 2.25 11.6985 4.461 11.6985 7.1715C11.6985 7.5615 11.7315 7.9365 11.8125 8.2935C7.722 8.094 4.1025 6.1335 1.671 3.147C1.2465 3.8835 0.9975 4.7265 0.9975 5.634C0.9975 7.338 1.875 8.8485 3.183 9.723C2.3925 9.708 1.617 9.4785 0.96 9.117C0.96 9.132 0.96 9.1515 0.96 9.171C0.96 11.562 2.6655 13.548 4.902 14.0055C4.5015 14.115 4.065 14.1675 3.612 14.1675C3.297 14.1675 2.979 14.1495 2.6805 14.0835C3.318 16.032 5.127 17.4645 7.278 17.511C5.604 18.8205 3.4785 19.6095 1.1775 19.6095C0.774 19.6095 0.387 19.5915 0 19.542C2.1795 20.9475 4.7625 21.75 7.548 21.75C16.602 21.75 21.552 14.25 21.552 7.749C21.552 7.5315 21.5445 7.3215 21.534 7.113C22.5105 6.42 23.331 5.5545 24 4.5585Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_569_3147'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
