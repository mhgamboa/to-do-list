const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json(user);
};

const login = (req, res) => {
  res.status(200).send("Login Route Controller");
};

module.exports = { register, login };
