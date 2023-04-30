const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookControllers')
// const Book = require('../models/book');

// Get a list of all books
router.get('/',BookController.getAllBooks);

//Get book by id
router.get('/:id',BookController.getBookById)

// Add a new book
router.post('/',BookController.addNewBook)

// Update an existing book
router.patch('/:id',BookController.updateBookById)

// Delete a book by ID
router.delete('/:id',BookController.deleteBookById)


module.exports = router;