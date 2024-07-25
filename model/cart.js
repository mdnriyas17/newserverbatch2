const mongoose = require("mongoose");

const cart = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  qty : {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("cart", cart)