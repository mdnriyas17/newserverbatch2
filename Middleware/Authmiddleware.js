const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (token) {
    const decoded = jwt.verify(token, "Riyas123");
    // console.log("decoded", decoded);
    if (decoded) {
      req.body.user = decoded?.data?._id;
      next();
    } else {
      res.send("Please Login");
    }
  } else {
    res.send("Please Login");
  }
};

module.exports = { auth };
