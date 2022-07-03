const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const usersRouter = require('./routes/users');
const users =require("./data/index");

const port = process.env.PORT || 4000

app.use(bodyParser.json())
// app.use('/users', usersRouter)
app.get("/users", (req,res)=>{
  res.json(users);
})
app.get('/', (req, res) => res.send('default route'))
app.listen(port, () => {
  console.log('app is listening on:', port)
})