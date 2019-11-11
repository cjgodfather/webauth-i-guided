const router = require("express").Router();
const bcrypt = require("bcryptjs");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.json({ api: "It's alive" });
});

router.post("/hash", (req, res) => {
  const pw = req.body.password;
  const hashed = bcrypt.hashSync(pw, 12);
  res.status(200).json({ pw, hashed });
});

module.exports = router;
