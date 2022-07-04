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
      res.send('User ID does not exist(HTTP404)');
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
  }

module.exports = {
    listUsers,
    showUser,
    createUser,

};