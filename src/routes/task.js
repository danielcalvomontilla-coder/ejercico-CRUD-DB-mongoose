const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/create", taskController.createTask) 

router.get("/", taskController.getAllTasks)

router.get("/id/:_id", taskController.getATaskById)

router.put("/markAsCompleted/:_id", (taskController.markAsCompleted))

router.put("/id/:_id", taskController.changeTitle)

router.delete("/id/:_id", taskController.deleteTask)

module.exports = router;
