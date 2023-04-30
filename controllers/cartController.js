const CartItem = require('../models/cart');

exports.getAllCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCartItemById = async (req, res, next) => {
  let cartItem;
  try {
    cartItem = await CartItem.findById(req.params.id);
    if (cartItem === null) {
      return res.status(404).json({ message: 'Cannot find cart item' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.cartItem = cartItem;
  next();
};

exports.returnCartItem = (req, res) => {
  res.json(res.cartItem);
};

exports.createCartItem = async (req, res) => {
  const cartItem = new CartItem({
    bookId: req.body.bookId,
    userId: req.body.userId,
    quantity: req.body.quantity,
    totalPrice: req.body.totalPrice
  });

  try {
    const newCartItem = await cartItem.save();
    res.status(201).json(newCartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateCartItem = async (req, res) => {
  if (req.body.bookId != null) {
    res.cartItem.bookId = req.body.bookId;
  }
  if (req.body.userId != null) {
    res.cartItem.userId = req.body.userId;
  }
  if (req.body.quantity != null) {
    res.cartItem.quantity = req.body.quantity;
  }
  if (req.body.totalPrice != null) {
    res.cartItem.totalPrice = req.body.totalPrice;
  }

  try {
    const updatedCartItem = await res.cartItem.save();
    res.json(updatedCartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    await res.cartItem.remove();
    res.json({ message: 'Cart item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
