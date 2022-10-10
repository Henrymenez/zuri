const Todo = require("../models/todoModel");
const APIFeatures = require('../utils/appUtils');

const todo = {}

todo.create = async (req, res) => {
  const data = req.body

  try {
    const todo = await new Todo({
      title: data.title,
      description: data.description
    }).save()

    res.status(200).send({ status: 'success', message: "Task created", data: todo })
  } catch (error) {
    res.status(400).send({ status: 'fail', message: "Task wasn't created", error })
  }

}

todo.getAll = async (req, res) => {
    try {

    const features = new APIFeatures(Todo.find(),req.query)
        .paginate();
        const todos = await features.query;
      res.status(200).send({ status: 'success', message: "All Tasks", result: todos.length, data: todos })
    } catch (error) {
      res.status(400).send({ status: 'fail', message: "Couldn't get tasks", error })
    }
  }
  
  todo.update = async (req, res) => {
    const data = req.body
  
    try {
      const newTask = await Todo.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            title: data.title,
            description: data.description
          }
        },
        { new: true }
      ) 
  
      res.status(200).send({ status: 'success', message: "Task updated",  data: newTask })
    } catch (error) {
      console.log(error)
      res.status(400).send({ status: 'fail', message: "Task wasn't updated", error })
    }
  
  }
  

  todo.delete = async (req, res) => {
    try {
 await Todo.findByIdAndDelete(req.params.id)

      res.status(204).send({ status: 'success', message: "Task deleted", data: null })
    } catch (error) {
      res.status(400).send({ status: 'fail', message: "Couldn't delete task", error })
    }
  }

module.exports = todo