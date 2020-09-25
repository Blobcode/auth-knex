const express = require("express");
const router = express.Router();
const jwt = require("../jwt");

// Middlewares
const auth = require("../middlewares/auth");

// Other
const user = require("../user");

router.post("/createUser", (req, res) => {
  user
    .createUser({
      username: req.body.username,
      password: req.body.password,
    })
    .then(({ uid }) => {
      const token = jwt.generateToken(uid);
      res.header("x-auth-token", token).json({ id: uid });
    });
});
router.post("/login", (req, res) => {
  user
    .authenticate({
      username: req.body.username,
      password: req.body.password,
    })
    .then(({ success, uid }) => {
      if (success) {
        const token = jwt.generateToken(uid);
        res.header("x-auth-token", token).json({ id: uid });
      } else res.sendStatus(401);
    });
});

module.exports = router;
