const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  const duplicateEmail = await User.findOne({ email });

  if (duplicateEmail) {
    return res.status(400).json({ msg: "Email already exists" });
  }

  const newUser = await User.create({ name, email, password });
  res.status(201).json({
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
  });
};

const login = (req, res) => {
  res.status(200).send("Login Route Controller");
};

module.exports = { register, login };
