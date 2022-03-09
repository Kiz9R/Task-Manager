const Task = require(`../models/task`);
const getAllTask=(req,res)=>{
    res.send(`all items from the file`);
};

const createTask = async (req,res)=>{
    const task= await Task.create(req.body);
    // res.send(`create task`);
    res.status(201).json({task});
}

const getTask = (req,res)=>{
    res.json({id:req.params.id});
}

const updateTask = (req,res)=>{
    res.send(`updating task`);
}

const deleteTask = (req,res)=>{
    res.send(`delete task`);
}


module.exports = {
    getAllTask,createTask,getTask,updateTask,deleteTask
};