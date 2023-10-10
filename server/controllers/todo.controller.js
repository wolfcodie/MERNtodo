const todos = require("../modules/todoModule");

const getAllTodos = async (req, res) => {
  try {
    const todoList = await todos.find();
    return res.status(200).json({ count: todoList.length, todos: todoList });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
const addTodo = async (req, res) => {
  try {
    const { description } = req.body;
    if (!description) {
      return res.status(400).json({ msg: "erro in inputs" });
    }
    const newTodo = new todos({ description });
    const secces = await newTodo.save();
    if (secces) res.status(201).json(secces);
  } catch (error) {
    console.log(error);
  }
};
const editTodo = async (req, res) => {
  const todoId = req.params.todoId;
  try {
    // const { description, completed } = req.body;
    const secces = await todos.findByIdAndUpdate(todoId, {
      ...req.body,
    });

    if (secces) {
      return res.status(201).json({ msg: "todo updated successfully" });
    } else {
      return res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
const deleteTodo = async (req, res) => {
  const todoId = req.params.todoId;
  try {
    const secces = await todos.findByIdAndDelete(todoId);

    if (secces) return res.status(204).send();
    return res.status(404).json({ error: "Todo not found" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllTodos,
  addTodo,
  editTodo,
  deleteTodo,
};
