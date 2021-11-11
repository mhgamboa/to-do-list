const getAllTasks = (req, res) => {
  res.send("All items from the file");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json(req.params);
};

const updateTask = (req, res) => {
  res.send("Update Single Task");
};

const deleteTask = (req, res) => {
  res.send("Delete Single Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
