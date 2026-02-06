const task = require('../models/task');
const Task = require('../models/task');

const taskController = {
    createTask: async (req, res) => {
        try{
            if(!req.body.title || req.body.title ==""){
                return res.status(400).json({error: "Title is required"});
            }
            const task = await Task.create(req.body);
            res.json(task);
        }catch(error){
            console.log(error);
            res.status(500).json("Error");
        }
    },
       getAllTasks: async (req, res) => {
        try{
            const filterByCompleted = req.query.completed;
            const filter = {};
            if(filterByCompleted){
                filter.completed = filterByCompleted === "true";
            }
            const tasks = await Task.find();
            res.json(task);
        }catch(error){
            console.log(error);
            res.status(500).json("Error");
        }
    },
    getATaskById: async (req, res) => {
        try{
            const _id = req.params._id;
            const task = await Task.findById(_id);
            res.json(task);
        }catch(error){
            console.log(error);
            res.status(500).json("Error");
        }
    },
    markAsCompleted: async (req, res) => {
        try{
            const _id = req.params._id;
            const task = await Task.findById(_id);
            task.completed = true;
            await task.save();
            res.json(task);
        }catch(error){
            console.log(error);
            res.status(500).json("Error");
        }
    },
    changeTitle: async (req, res) => {
        try{
            const _id = req.params._id;
            const task = await Task.findById(_id);
            const newTitle = req.body.title;
            task.title = newTitle;            
            await task.save();
            res.json(task);
        }catch(error){
            console.log(error);
            res.status(500).json("Error");
        }
    },
     deleteTask: async (req, res) => {
        try{
            const _id = req.params._id;
            const task = await Task.findByIdAndDelete(_id);            
            res.json(task);
        }catch(error){
            console.log(error);
            res.status(500).json("Error");
        }
    }
};

module.exports = taskController;