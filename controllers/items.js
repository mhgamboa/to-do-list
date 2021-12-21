const Item = require("../models/Item");
const { StatusCodes } = require("http-status-codes");

const getAllItems = async (req, res) => {
  const { userId } = req.user;

  const items = await Item.find({ createdBy: userId });

  res.status(200).json(items);
};

const createItem = async (req, res) => {
  const { userId } = req.user;
  const { name } = req.body;

  const item = await Item.create({ createdBy: userId, name });
  // res.status(201).json({ userId, name });
  res.status(201).json(item);
};

const deleteItem = async (req, res) => {
  const { userId } = req.user;
  const { itemId } = req.params;

  const item = await Item.findOneAndRemove({
    createdBy: userId,
    _id: itemId,
  });

  if (!item) {
    return res.status(401).json({ msg: "Please send a valid Request" });
  }

  res.status(200).send(item);
};

const updateItem = async (req, res) => {
  const { name, completed } = req.body;
  const { userId } = req.user;
  const { itemId } = req.params;

  const item = await Item.findOneAndUpdate(
    { _id: itemId, createdBy: userId },
    {
      name,
      completed,
    },
    { new: true, runValidators: true }
  );
  if (!item) {
    return res.status(401).json({ msg: "Please send a valid Request" });
  }
  res.status(StatusCodes.ACCEPTED).send(item);
};

module.exports = { getAllItems, createItem, deleteItem, updateItem };
