const jwt = require('jsonwebtoken');
const token_key = process.env.SECRETE_KEY;

const verifyToken = (token) => {
    try {
        const verifyiedToken = jwt.verify(token, token_key);
        if(!verifyiedToken){
            return "token invalid or expired"
        }

        return verifyiedToken;

    } catch (error) {
        console.log("token error", error);
    }
}

module.exports = verifyToken;