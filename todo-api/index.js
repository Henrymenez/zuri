const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://127.0.0.1:27017/todo'

// App middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Routes 
app.get('/ping', (req, res) => {
  res.status(200).send("Hello world!")
});


app.use("/task", require("./routes/todoRoute"))


// Not found route - 404
app.use("**", (req, res) => {
  res.status(404).send({ message: "Route not found" })
})

// Error middleware
app.use((error, req, res, next) => {
  console.log(error)
  res.status(500).send({ message: "Something went wrong", error: error.message })
}) 

app.listen(port, async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log(':::> Connected to MongoDB database')
  } catch (error) {
    console.log("<::: Couldn't connect to database ", error)
  }

  console.log(`:::> listening on http://localhost:${port}`)
});