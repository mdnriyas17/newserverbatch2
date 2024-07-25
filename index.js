const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const db = require("./database/db");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    message: "Welcome",
    data: {},
  });
});
app.use("/api", require("./Routes/routes"));

db();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
