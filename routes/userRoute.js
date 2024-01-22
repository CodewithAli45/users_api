const { getUsers, loginUser, registerUser } = require('../controllers/userController');
const isLoggedIn = require('../middleware/isLoggedIn');

const router = require('express').Router();

router.get('/getusers', getUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);


module.exports = router;