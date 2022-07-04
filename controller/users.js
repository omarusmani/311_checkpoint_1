const users = require("../data/index");
const samp=require("../data/sampleUser")

const listUsers = (req,res)=>{
    res.json(users);
  };
const showUser = (req,res)=>{
    const id =req.params.id;
    const person =users.find((user)=> user.id ===Number(id));
    // console.log(person)
    if(person===undefined){
      res.status(404);
      res.send('User ID does not exist (HTTP404)');
    }
    else//check if id is a valid one else send error code
    res.json(person);
  };

const createUser = (req,res)=>{
    let max=0;
    users.forEach(user => {
      if (user.id > max) {
        max = user.id;//checking max id and
      }
    })
    const person ={
      ...samp,//changed order in order to not overwrite the id
      id:max+1,
    }
    console.log(person)
    users.push(person)
    res.json(person)
  };

const updateUser = (req,res)=>{
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
  }};

const deleteUser = (req, res)=>{
    const id= req.params.id;
    const index =users.findIndex((user)=> user.id ===Number(id));
    console.log(index)
    if(index===-1){
      res.status(400);
      res.send('User ID does not exist (HTTP400)');
    }
    else{
    users.splice(index,1)
    res.json({message: `User id:${id} is deleted`});
  }};

module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser

};