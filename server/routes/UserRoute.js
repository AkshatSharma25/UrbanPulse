const UserRouter=require("express").Router();
const UserController=require("../controllers/UserController");

UserRouter.post('/createUser',UserController.CreateUser);
UserRouter.put('/updateUser/:id',UserController.UpdateUserById);

module.exports = UserRouter;