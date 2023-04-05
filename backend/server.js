require('dotenv').config()
require('./Database/db')

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require("./routes/user")
const profileRoutes = require("./routes/profile")
const cors = require("cors");
// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)
app.use('/api/profile', profileRoutes)

app.get("/trail",(req,res)=>{
  res.send("<div>hello<div>");
});

app.listen(3000, () => {
  console.log("Connected to server")
})
