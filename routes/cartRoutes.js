const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Get all cart items
router.get('/', cartController.getAllCartItems);

// Get a specific cart item by ID
router.get('/:id', cartController.getCartItemById, cartController.returnCartItem);

// Add a new item to the cart
router.post('/', cartController.createCartItem);

// Update an existing cart item
router.put('/:id', cartController.getCartItemById, cartController.updateCartItem);

// Remove an item from the cart
router.delete('/:id', cartController.getCartItemById, cartController.deleteCartItem);

module.exports = router;
