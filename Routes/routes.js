const express = require("express");

const router = express.Router();
const { auth } = require("../Middleware/Authmiddleware");

const { loginuser, signupuser } = require("../controller/userdeatils");
const { addtocart, getcart } = require("../controller/cart");

router.post("/login", loginuser);
router.post("/signup", signupuser);

router.post("/addtocart", auth, addtocart);
router.get("/getcart", auth, getcart);

module.exports = router;