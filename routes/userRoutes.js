const router = require('express').Router();

const {loginUser, getUser , signupUser} = require('../controller/userController');

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/getuser', getUser)

module.exports = router;