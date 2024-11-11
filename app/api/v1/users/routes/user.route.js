const { index, getUserById } = require("../controller/user.controllers");
const router = require("express").Router();

router.get("/users", index);
router.get("/users/:id", getUserById);

module.exports = router;
