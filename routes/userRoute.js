
const { getUsers, deleteUser, getUserbyId, updateUser } = require('../controllers/userController');
const isLoggedIn = require('../middleware/isLoggedIn');

const userRouter = require('express').Router();

userRouter.get('/getusers', isLoggedIn, getUsers);
userRouter.get('/getuserbyid/:id', isLoggedIn, getUserbyId);
userRouter.put('/updateuser/:id', isLoggedIn, updateUser);
userRouter.delete('/delete/:id', isLoggedIn, deleteUser)


module.exports = userRouter;