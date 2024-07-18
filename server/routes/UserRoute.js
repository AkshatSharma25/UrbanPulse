const UserRouter=require("express").Router();
const UserController=require("../controllers/UserController");

UserRouter.post('/createUser',UserController.CreateUser);
UserRouter.put('/updateUser/:id',UserController.UpdateUserById);
UserRouter.get('/login/:email/:password',UserController.GetUser);
module.exports = UserRouter;