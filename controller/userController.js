const Users   = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt  = require('bcrypt');

const saltRounds = 10;
const JWT_SECRET = "newtonSchool";


const getUser = async (req, res) => {
    try {
        const users = await Users.find();

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

const loginUser =async (req, res) => {

    const email  = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({ 'email':email });

    if(user){

        if(bcrypt.compareSync(password , user.password)){

            const token = jwt.sign(
                { userId: user._id },
                JWT_SECRET,
                {
                    expiresIn: "24h",
                }
            );

            res.status(200).json({
                status: 'success',
                token
            });
        }else{
            res.status(403).json({
                message: 'Invalid Password, try again !!',
                status: 'fail'
            });
        }
    }else{
        res.status(404).json({
            message: 'User with this E-mail does not exist !!',
            status: 'fail'
        });
    }

}


const signupUser = async (req, res) => {

    const {email, password, name} = req.body;

    const user = await Users.findOne({ email });
    if(user){
        res.status(409).json({
            message: 'User with given Email allready register',
            status: 'fail'
        });
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newuser = {
        name,
        email,
        password: hashedPassword
    };

    try{
        await Users.create(newuser);
        res.status(200).json({
            message: 'User SignedUp successfully',
            status: 'success'
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: 'Something went wrong'
        });
    }

}

module.exports = { loginUser , signupUser, getUser };
