const express = require("express");
const mongoose = require("./config/moongose");
const cors = require('cors');
const port  = 5000;

const app = express();
const booksRoute = require('./routes/bookRoutes');
const ordersRoute = require('./routes/ordersRoute');
const cartsRoute = require('./routes/cartRoutes');
const userRoutes = require('./routes/userRoutes');

mongoose();

// Use the books route for all /books/* endpoints
app.use('/books', booksRoute);
app.use('/orders', ordersRoute);
app.use('/cart', cartsRoute);
app.use('/user', userRoutes);

app.use(express.json());

//To allow outside request 
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});


app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("Server running at http://localhost:",port);
});
