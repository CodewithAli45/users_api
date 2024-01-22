const { getUsers, loginUser, registerUser, deleteUser } = require('../controllers/userController');
const isLoggedIn = require('../middleware/isLoggedIn');

const router = require('express').Router();

router.get('/getusers', getUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/delete', deleteUser)


module.exports = router;