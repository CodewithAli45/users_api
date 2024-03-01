const jwt = require('jsonwebtoken');

const verifyToken = (req, res) => {
    const tokenHeader = req.headers.authorization;
    if(!tokenHeader){
        return res.json({
            msg: "Please provide Token in the Header"
        })
    }
    try {
        const token = tokenHeader.split(' ')[1];
        const decodedId = jwt.verify(token, process.env.SECRETE_KEY);
        return decodedId;
    } catch (error) {
        console.log("Token Error", error);
    }
}

module.exports = verifyToken;