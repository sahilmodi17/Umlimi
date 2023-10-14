const express = require('express')
const router = express.Router()
const {
  placeOrder,
  getAllOrders,
  getUserOrder,
} = require('../controllers/order')

router.post('/placeOrder', placeOrder)
router.get('/getAllOrders', getAllOrders)
router.get('/getUserOrder/:userId', getUserOrder)

module.exports = router
