const router = require("express").Router();
const { register, login } = require("../controllers/auth");

// @route api/v1/auth

// @desc retister new user
// @access public
router.post("/register", register);

// @desc login user
// @access public
router.post("/login", login);

module.exports = router;
