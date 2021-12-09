const mongoose = require("mongoose");
const User = require("./User");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 5,
  },
  dueDate: {
    type: Date,
    required: false,
  },
  completed: { type: Boolean, default: false },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: User,
    required: [true, "Please provide a user"],
  },
});

module.exports = mongoose.model("items", ItemSchema);
