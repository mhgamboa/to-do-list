const User = require("../models/User");

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
  const token = newUser.createJWT();

  res.status(201).json({
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ msg: "Please provide email and password" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({ msg: "Email does not exist" });
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.status(400).send({ msg: "Invalid Credentials" });
  }

  const token = user.createJWT();

  res.status(201).send({ user: { name: user.name }, token });
};

module.exports = { register, login };
