const express = require("express");
const { ToDoController } = require("../controllers");

const app = express();

// Get To-Do List
app.get("/:id", ToDoController.getTodolist);

// Add new To-do to existing list
app.post("/", ToDoController.addToList);

// Edit status of existing To-Do task
app.put("/", ToDoController.editStatus);

module.exports = app;
