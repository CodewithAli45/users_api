const User = require('../models/Users');

const getUser = async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json({
            status: "success", 
            data: {users}
        })
        
    } catch (error) {
        return res.status(500).json({
            status: "failure", 
            message: error.message
        })
    }
}

const addUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const newUser = new User({
            name, email, password
        });

        await User.create(newUser);
        return res.status(201).json({
            status: "success", 
            data: {newUser}
        })
        
    } catch (error) {
        return res.status(500).json({
            status: "failure", 
            message: error.message
        })
    }
}

module.exports = {
    getUser, addUser
}