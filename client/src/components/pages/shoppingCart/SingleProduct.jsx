import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { featuredProducts } from '../Temp'
import { useUserContext } from '../../../Context'
import axios from 'axios'
import { useCartContext } from '../../../context/Cart_context'

const SingleProduct = () => {
  const { qty } = useCartContext()
  const { id } = useParams()
  const { addToCart } = useCartContext()
  const { searchproduct, isSearch, searchName, searchData, setIsSearch } =
    useUserContext()

  let product = featuredProducts.filter((item) => {
    return item.id === id
  })

  if (product.length === 0) {
    product = searchData.filter((item) => {
      return item._id === id
    })
  }

  const handleAddToCart = (product) => {
    console.log('singlePRoduct ma handleAddtoCart', product[0])
    addToCart(product[0])
  }

  return (
    <>
      <div>
        <section className='py-10 font-poppins dark:bg-gray-800'>
          <div className='max-w-6xl px-4 mx-auto'>
            <div className='flex flex-wrap mb-24 -mx-4'>
              <div className='w-full px-4 mb-8 md:w-1/2 md:mb-0'>
                <div className='sticky top-0 overflow-hidden '>
                  <div className='relative mb-6 lg:mb-10 lg:h-96'>
                    <img
                      className='object-contain w-full lg:h-full'
                      src={product[0]?.image1}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='w-full px-4 md:w-1/2'>
                <div className='lg:pl-20'>
                  <div className='mb-2 '>
                    <h2 className='max-w-xl mt-2 mb-2 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300'>
                      {product[0]?.name}
                    </h2>

                    <p className='inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 '>
                      <span>$ {product[0]?.price}</span>
                      <span className='ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400'>
                        {/* $130 */}
                      </span>
                    </p>
                  </div>
                  <div className='mb-2'>
                    <h2 className='mb-2 text-lg font-bold text-gray-700 dark:text-gray-400'></h2>
                    <div className='bg-gray-100 dark:bg-gray-700 rounded-xl'>
                      <div className='p-3 lg:p-5 '>
                        <div className='p-2 rounded-xl lg:p-6 border border-green-600 dark:bg-gray-800 bg-gray-50'>
                          {product[0]?.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='py-6 mb-6 border-t border-b border-gray-200 '>
                    <span className='text-base text-gray-600 '>In Stock</span>
                    <p className='mt-2 text-sm text-emerald-500 '>
                      Ships from Uganda.
                      <span className='text-gray-600 dark:text-gray-400'>
                        Most customers receive within 1-2 days.
                      </span>
                    </p>
                  </div>
                  <div className='mb-6 '></div>
                  {/* <div className='flex gap-4 mb-6'>
                    <div className='mb-4 mr-4 lg:mb-0'>
                      <div className='w-28'>
                        <div className='relative flex flex-row w-full h-10 bg-transparent rounded-lg'>
                          <button className='w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer hover:text-gray-700  hover:bg-gray-300'>
                            <span className='m-auto text-2xl font-thin' onClick={()=>{decrease(id)}}>-</span>
                          </button>
                          <div
                            className=' flex justify-center w-full font-semibold items-center text-gray-700  bg-gray-100 outline-none  focus:outline-none text-md hover:text-black'
                            // placeholder={qty}
                          >{qty}</div>
                          <button className='w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer  dark hover:text-gray-700 hover:bg-gray-300'>
                            <span className='m-auto text-2xl font-thin' onClick={()=>{increase(id)}}>+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='mb-4 lg:mb-0'>
                      <button className='flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11'></button>
                    </div>
                    <button

                      className='w-full px-4 py-3 text-center text-white bg-emerald-600 border border-emerald-600 hover:bg-emerald-400 hover:text-gray-100 lg:w-1/2 rounded-xl'
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to cart
                    </button>
                  </div> */}
                  <div className='flex gap-4 mb-6'>
                    <button
                      className='w-full px-4 py-3 text-center text-white bg-emerald-600 border border-emerald-600 hover:bg-emerald-400 hover:text-gray-100 rounded-xl'
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  {/* <div className='flex gap-4 mb-6'>
                    <button
                      className='w-full px-4 py-3 text-center text-white bg-emerald-600 border border-emerald-600 hover:bg-emerald-400 hover:text-gray-100 rounded-xl'
                    >
                      Buy now
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SingleProduct
