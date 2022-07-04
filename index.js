const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const usersRouter = require('./routes/users');
const users = require("./data/index");
const samp=require("./data/sampleUser")
const userController=require("./controller/users")
const port = process.env.PORT || 4000

app.use(bodyParser.json())
// app.use('/users', usersRouter)
app.get("/users",userController.listUsers)

app.get("/users/:id",userController.showUser)

app.post("/users", userController.createUser)

app.put("/users/:id", (req,res)=>{
  const id =req.params.id;
  const person =users.find((user)=> user.id ===Number(id));
  const index =users.findIndex((user)=> user.id ===Number(id));

  // console.log(person)
  if(person===undefined){
    res.status(400);
    res.send('User ID does not exist(HTTP400)');
  }
  else{//check if id is a valid one else send error code
  // res.json(person);
  const newPerson = {
    ...person,
    ...req.body,
  };
  console.log(index)
  users.splice(index,1,newPerson)
  // console.log(person)
  res.send(newPerson)
}
});
app.delete("/users/:id", (req, res)=>{
  const id= req.params.id;
  const index =users.findIndex((user)=> user.id ===Number(id));
  console.log(index)
  if(index===-1){
    res.status(400);
    res.send('User ID does not exist(HTTP404)');
  }
  else{
  users.splice(index,1)
  res.json({message: `User id:${id}deleted `});
}

});


app.get('/', (req, res) => res.send('default route'))
app.listen(port, () => {
  console.log('app is listening on:', port)
})