const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/ordersControllers')
// const Order = require('../models/order');

// Get a list of all books
router.get('/',OrdersController.getAllOrders);

//Get book by id
router.get('/:id',OrdersController.getOrderById)

// Add a new book
router.post('/',OrdersController.createOrder)

// Update an existing book
router.patch('/:id',OrdersController.updateOrder)

// Delete a book by ID
router.delete('/:id',OrdersController.deleteOrder)


module.exports = router;