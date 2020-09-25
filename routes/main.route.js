//? This file is for all of the main routes (i.e. all one other than user ones.)
const express = require("express");
const router = express.Router();

// Middlewares
const auth = require("../middlewares/auth");

//? logic

//* Unprotected
router.get("/public", (req, res) => {
  res.send("public");
});

//* Protected
router.get("/private", auth, (req, res) => {
  res.send("public 1");
});

module.exports = router;
