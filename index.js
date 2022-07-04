const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
// const users = require("./data/index");
// const samp=require("./data/sampleUser")
// const userController=require("./controller/users")
const port = process.env.PORT || 4000

app.use(bodyParser.json());
app.use("/", usersRouter);
// app.use('/users', usersRouter)
// app.get("/users",userController.listUsers)
// app.get("/users/:id",userController.showUser)
// app.post("/users", userController.createUser)
// app.put("/users/:id", userController.updateUser);
// app.delete("/users/:id", userController.deleteUser);


app.get('/', (req, res) => res.send('default route'))
app.listen(port, () => {
  console.log('app is listening on:', port)
})