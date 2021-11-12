const Task = require("../models/task.js");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (e) {
    res.status(500).json({ msg: err });
    console.error(e);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body); //Both creates a document and inserts it into the database
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
    console.error(err);
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; // const taskID = req.params.id;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (e) {
    res.status(500).json({ msg: err });
    console.error(e);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `no task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
    console.error(err);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate(
      //Takes 3 arguments
      { _id: taskID }, // 1. WhatYouFind
      req.body, // 2. WhatYouUpdateWith
      {
        // 3. Options
        new: true, //Return the document after update
        runValidators: true, //Uses validators as defined in Schema
      }
    );
    console.log(task);
    if (!task) {
      return res.status(404).json({ msg: `no task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (e) {}
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
