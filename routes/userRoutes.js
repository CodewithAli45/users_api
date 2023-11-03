const router = require('express').Router();

const {getUser, addUser} = require('../controller/userController');

router.get('/getusers', getUser);
router.post('/adduser', addUser);

module.exports = router;