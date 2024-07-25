const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      data: user,
    },
    "Riyas123",
    {
      expiresIn: "30d",
    }
  );
};

module.exports = { generateToken }