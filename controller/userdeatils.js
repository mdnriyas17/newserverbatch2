const user = require("../model/users");
const { generateToken } = require("../config/jwt");
const jwt = require("jsonwebtoken");
const loginuser = async (req, res) => {
  const { email, password } = req.body;

  const userss = await user.findOne({ email });
  const token = generateToken(userss);
  if (!userss) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "User Not Found",
    });
  }

  if (userss.password !== password) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Incorrect Password",
    });
  }

  try {
    const data = await user.findOne({ email });
    res.status(200).json({
      status: 200,
      success: true,
      message: "User Details",
      data: data,
      token: token,
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

const signupuser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const users = await user.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      status: 201,
      success: true,
      message: "User Created Successfully",
      data: users,
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

module.exports = { loginuser, signupuser };
