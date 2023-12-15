const Order = require('../models/Order')
const stripe = require('stripe')(
  'sk_test_51OKbV1SDBAw5mJPKaGVo2fkxlYSJgWTtxkz5EyOyZuMsdNImeCgm2EoSj20yNL5MnPXTb8rGapAv3e4N4RmlO9xl00lscnGEM9'
)
const placeOrder = async (req, res) => {
  // console.log(req.body)

  const { products } = req.body
  // console.log(products)

  const lineItems = products.map((product) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.qty,
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:5173/success',
    cancel_url: 'http://localhost:5173/cancel',
  })

  const filteredProducts = products.map((product) => ({
    productId: product.productId,
    qty: product.qty,
    transactionId: session.id,
  }))

  // console.log(filteredProducts)
  console.log(typeof (session.id))

  try {
    const newOrder = new Order({
      userId: req.body.userId,
      products: filteredProducts,
    })

   let check=  await newOrder.save()
//  console.log(check)


    res
      .status(201)
      .json({ id: session.id, massage: 'Order placed successfully' })
  } catch (error) {
    console.error('Error placing the order:', error)
    res.status(500).json({ error: 'Internal server error' })
  }

  // try {
  //   const { userId, p.body
  //     userId: userId,
  //     products: products,
  //   })

  //   await newOrder.save()
  //   res
  //     .status(201)
  //     .json({ message: 'Order placed successfully', order: newOrder })
  // } catch (error) {
  // console.error('Error placing the order:', error)
  // res.status(500).json({ error: 'Internal server error' })
  // }
}

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ orderDate: -1 })
      .populate('userId')
      .populate('products.productId')

    if (orders.length === 0) {
      return res.status(404).json({ message: 'No orders found' })
    }

    res.status(200).json({ orders })
  } catch (error) {
    console.error('Error fetching orders:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

const getUserOrder = async (req, res) => {
  const userId = req.params.userId
  // console.log(userId)
  try {
    const orders = await Order.find({ userId: userId })
    // console.log(orders)
    if (orders.length === 0) {
      return res.status(200).json({ message: 'No orders found' })
    }

    res.status(200).json({ orders })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = {
  placeOrder,
  getAllOrders,
  getUserOrder,
}
