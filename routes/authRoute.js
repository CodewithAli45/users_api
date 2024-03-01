
const { registerUser, loginUser, logout } = require('../controllers/authController');
const isLoggedIn = require('../middleware/isLoggedIn');

const authRouter = require('express').Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.post('/logout/:id', isLoggedIn ,logout)


module.exports = authRouter;