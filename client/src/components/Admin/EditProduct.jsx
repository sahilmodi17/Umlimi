import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUserContext } from '../../Context'
import axios from 'axios'

const EditProduct = () => {
  const { id } = useParams()
  const { allProducts } = useUserContext()

  // Find the product by id
  const editProduct = allProducts.find((item) => item._id === id)

  // Initialize formData with the existing product data
  const [formData, setFormData] = useState({
    name: editProduct.name,
    price: editProduct.price,
    description: editProduct.description,
    category: editProduct.category,
    qty: editProduct.qty,
    image1: editProduct.image1, // You can set this to null if you want to handle image updates separately
  })

  // Update formData when the editProduct changes
//   useEffect(() => {
//     setFormData({
//       name: editProduct.name,
//       price: editProduct.price,
//       description: editProduct.description,
//       category: editProduct.category,
//       qty: editProduct.qty,
//       image1: null, // Set this to null if you want to handle image updates separately
//     })
//   }, [editProduct])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setFormData({
      ...formData,
      name: value,
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFormData({
      ...formData,
      image1: file,
    })
  }

  const handleEdit = async (e) => {
    e.preventDefault()

    // const formDataToSubmit = new FormData()
    // formDataToSubmit.append('name', formData.name)
    // formDataToSubmit.append('price', formData.price)
    // formDataToSubmit.append('category', formData.category)
    // formDataToSubmit.append('description', formData.description)
    // formDataToSubmit.append('qty', formData.qty)
    // formDataToSubmit.append('image1', formData.image1)

    console.log("inside handle edit", formData)
    try {
      const data = await axios.patch(
        `/api/v1/admin//updateProduct/${id}`,
        formData
      )
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='bg-emerald-100 h-[140vh] w-[80%]'>
      <div className='bg-white w-[95%] h-[123vh] rounded-2xl shadow m-8'>
        <div className='text-4xl text-neutral-600 font-quicksand flex justify-center p-3'>
          Edit the Product
        </div>

        <div className='p-8 pl-10'>
          <div>
            <label htmlFor='Name' className='text-2xl'>
              Name <span className='ml-16'> : </span>
            </label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Enter the product name...'
              className='bg-zinc-200 p-2 pl-4 ml-2 rounded-lg text-xl w-[80%] outline-none'
            />
          </div>
          <div className='my-7'>
            <label htmlFor='Category' className='text-2xl'>
              Category <span className='ml-5   pl-3'> : </span>
            </label>
            <input
              type='text'
              name='category'
              value={formData.category}
              onChange={handleInputChange}
              placeholder='Enter the product Category...'
              className='bg-zinc-200 p-2 pl-4 ml-2 rounded-lg text-xl w-[80%] outline-none'
            />
          </div>
          <div className='my-7'>
            <label htmlFor='Price' className='text-2xl'>
              Price <span className='ml-16 pl-3'> : </span>
            </label>
            <input
              type='number'
              name='price'
              value={formData.price}
              onChange={handleInputChange}
              placeholder='Enter the product price...'
              className='bg-zinc-200 p-2 pl-4 ml-2 rounded-lg text-xl w-[80%] outline-none'
            />
          </div>
          <div className='my-7'>
            <label htmlFor='Quantity' className='text-2xl'>
              Quantity <span className='ml-9'> : </span>
            </label>
            <input
              type='number'
              name='qty'
              value={formData.qty}
              onChange={handleInputChange}
              placeholder='Enter the product Qty...'
              className='bg-zinc-200 p-2 pl-4 ml-2 rounded-lg text-xl w-[80%] outline-none'
            />
          </div>
          <div className='my-7 flex text-start'>
            <label htmlFor='Description' className='text-2xl'>
              Description <span className='ml-2'> : </span>
            </label>
            <textarea
              name='description'
              id='description'
              value={formData.description}
              cols='112'
              rows='10'
              onChange={handleInputChange}
              className='bg-zinc-200 rounded-2xl ml-4 outline-none p-2 pl-4'
            ></textarea>
          </div>
          <div className='my-7 flex text-start'>
            <input type='file' name='image1' onChange={handleFileChange} />
          </div>
          <div className='my-7 flex text-start'>
            <button className='bg-emerald-400 p-3' onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct