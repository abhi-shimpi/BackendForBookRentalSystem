const Order = require('../models/order');

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific order by ID
exports.getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order == null) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.order = order;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new order
exports.createOrder = async (req, res) => {
  const order = new Order({
    bookId: req.body.bookId,
    userId: req.body.userId,
    dueDate: req.body.dueDate
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing order
exports.updateOrder = async (req, res) => {
  if (req.body.bookId != null) {
    res.order.bookId = req.body.bookId;
  }

  if (req.body.userId != null) {
    res.order.userId = req.body.userId;
  }

  if (req.body.dueDate != null) {
    res.order.dueDate = req.body.dueDate;
  }

  try {
    const updatedOrder = await res.order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    await res.order.remove();
    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
