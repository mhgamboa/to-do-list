const router = require("express").Router();
const {
  getAllItems,
  createItem,
  deleteItem,
  updateItem,
} = require("../controllers/items");

router.route("/").get(getAllItems).post(createItem);

router.route("/:id").delete(deleteItem).patch(updateItem);

module.exports = router;
