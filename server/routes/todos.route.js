const express = require("express");
const router = express.Router();

const {
  getAllTodos,
  addTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/todo.controller");
// routes
router.get("/", getAllTodos);
router.post("/", addTodo);
router.patch("/:todoId", editTodo);
router.delete("/:todoId", deleteTodo);

module.exports = router;
