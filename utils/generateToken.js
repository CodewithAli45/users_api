const jwt = require('jsonwebtoken');
const token_key = process.env.SECRETE_KEY;

const generateToken = (id) => {
    try {
        const token = jwt.sign({id}, token_key, {expiresIn: "3h"});
        if(!token){
            return "token not available"
        }

        return token;

    } catch (error) {
        console.log("Error in generating token", error);
    }
}

module.exports = generateToken;