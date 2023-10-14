import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const MyOrders = () => {
  // const userId = '65291fe8d3d8386320468ed4'
  const { userId } = useParams()
  const [myOrders, setMyOrders] = useState([])
  const [products, setProducts] = useState({}) // Use an object to store products by ID
  let count = 0

  const navigateTo = useNavigate()
  const getMyOrders = async () => {
    if(userId){
      try {
        // console.log(userId)
        const response = await axios.get(`/api/v1/order/getUserOrder/${userId}`)
        const data = response.data
        // console.log('Full data response:', data)

        if (data && data.orders) {
          // console.log('Orders:', data.orders)
          setMyOrders(data.orders)
        } else {
          setMyOrders()
          // console.log('No orders found in the response.')
        }
      } catch (error) {
        console.log('Error while fetching orders:', error)
      }
    } else {
      alert('you are not login ')
      navigateTo('/login')
    } 
    
  }

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`/api/v1/admin/getAllProducts`)
      const allProducts = response.data.products
      // console.log(allProducts)

      // Organize products by ID in an object
      const productsById = {}
      allProducts.forEach((product) => {
        productsById[product._id] = product
      })

      setProducts(productsById)
    } catch (error) {
      console.log('Error while fetching products:', error)
    }
  }

  useEffect(() => {
    getMyOrders()
    fetchAllProducts()
  }, [])

  return (
    <div className='m-5 sm:m-6 lg:m-10 sm:p-6 lg:p-10 rounded-sm shadow '>
      <div className='bg-green-50 rounded-sm border border-black p-5 sm:p-10 lg:p-12 flex-col justify-start items-start flex'>
        <div className='text-zinc-800 text-2xl font-semibold font-quicksand leading-9'>
          Hi, Your All Orders
        </div>
        <div className='w-full p-5 overflow-x-auto'>
          {myOrders ? (
            <table className='w-full text-sm text-left'>
              <thead className='text-gray-700 bg-zinc-200 rounded-lg text-xl font-medium font-roboto'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Sr No
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Product Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Category
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Quantity
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Price
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Order Id
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Total Amount
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Order Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {myOrders?.map((item, orderIndex) => {
                  {
                    count += 2
                  }
                  return (
                    <React.Fragment key={item._id}>
                      {item.products.map((product1, index) => {
                        const product = products[product1.productId]
                        if (!product) return null
                        const total = product.price * product.qty
                        return (
                          <tr
                            className='border-b border-gray-200 font-semibold text-lg'
                            key={product._id}
                          >
                            <td scope='row' className='px-6 py-2'>
                              {count + index - 1}
                            </td>
                            <td className='px-6 py-2'>{product.name}</td>
                            <td className='px-6 py-2'>{product.category}</td>
                            <td className='px-6 py-2'>{product.qty}</td>
                            <td className='px-6 py-2'>{product.price}</td>
                            <td className='px-6 py-2'>{product1._id}</td>
                            <td className='px-6 py-2'>{total}$</td>
                            <td className='px-6 py-2'>{item.orderDate}</td>
                          </tr>
                        )
                      })}
                    </React.Fragment>
                  )
                })}
              </tbody>
            </table>
          ) : (
            <h1 className='text-zinc-800 text-2xl font-semibold font-quicksand leading-9'>
              You are not ordered any product yet.
            </h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyOrders
