const Item = require("../models/Item");
const { StatusCodes } = require("http-status-codes");

const getAllItems = async (req, res) => {
  const items = await Item.find({ createdBy: req.body.userId });
  res.status(StatusCodes.OK).json(items);
};

const createItem = async (req, res) => {
  req.body.createdBy = req.body.userId;
  const item = await Item.create(req.body);
  res.status(StatusCodes.CREATED).json(item);
};

const deleteItem = async (req, res) => {
  const item = await Item.findOneAndRemove({
    createdBy: req.body.userId,
    name: req.params.id,
  });
  res.status(StatusCodes.ACCEPTED).send(item);
};

const updateItem = async (req, res) => {
  res.status(200).send("Update Item Controller");
};

module.exports = { getAllItems, createItem, deleteItem, updateItem };
