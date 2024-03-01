const User = require("../models/userModel");

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if(users.length < 1){
            return res.status(400).json({
                msg: "No User found in the Database",
            })
        }

        res.status(200).json({
            status: "success",
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Failure",
            Error: "Internal Server Error",
            erro: error.message
        })
    }
}

const getUserbyId = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({
                msg: "User Not Found",
                status: "Failure"
            })
        }

        res.status(200).json({
            msg: "Fetched User Successfully",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            status: "Failure",
            msg: "Internal Server Error",
            error: error.message
        })
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {fullName, address, phone} = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate({id}, {fullName, address, phone}, {new: true});
        if(!updatedUser){
            return res.status(404).json({
                msg: "User Not Found",
                status: "Failure"
            })
        }
        await updatedUser.save();
        res.status(201).json({
            msg: "User updated Successfully",
            data: updatedUser
        })
    } catch (error) {
        res.status(500).json({
            status: "Failure",
            msg: "Internal Server Error",
            error: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    const {userId} = req.body;
    try {
        const user = await User.findByIdAndDelete(userId);
        if(!user){
            return res.status(404).json({
                msg: "User Not Found",
                status: "Failure"
            })
        }
        res.status(200).json({
            message: "User deleted successfully",
            deltedUser: user
        })
    } catch (error) {
        return res.status(500).json({
            msg: "failure",
            Error: "Internal Server Error",
            erro: error.message
        })
    }
}


module.exports = {
    getUsers,
    getUserbyId,
    updateUser,
    deleteUser,
}