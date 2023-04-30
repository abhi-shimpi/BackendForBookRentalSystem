const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');

// Route for creating a new user
router.post('/', userController.createUser);

// Route for getting a list of all users
router.get('/', userController.getAllUsers);

// Route for getting a single user by ID
router.get('/:userId', userController.getUserById);

// Route for updating a user by ID
router.put('/:userId', userController.updateUserById);

// Route for deleting a user by ID
router.delete('/:userId', userController.deleteUserById);

module.exports = router;
