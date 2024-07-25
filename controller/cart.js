const cart = require("../model/cart");

const addtocart = async (req, res) => {
  const userId = req.body.user;
  const { qty } = req.body;

  try {
    const carts = await cart.create({
      userId,
      qty,
    });
    res.status(201).json({
      status: 201,
      success: true,
      message: "Cart Added Successfully",
      data: carts,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getcart = async (req, res) => {
  const usersss = req.body.user;
  try {
    const carts = await cart.find({ userId: usersss }).populate("userId");
    res.status(200).json({
      status: 200,
      success: true,
      message: "Cart Details",
      data: carts,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { addtocart, getcart };
