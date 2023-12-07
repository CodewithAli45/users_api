const verifyToken = require("../utils/verifyToken")

const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(400).json({
                status:"failure",
                msg: "Please provide token"
            })
        }

        const decodedId = verifyToken(token);
        // console.log("token id", decodedId);
        if(!decodedId){
            throw new Error("invalid/expired token")
        } else {
            req.userAuthId = decodedId?.id;
            next();
        }
        // res.send("decoded id ", decodedId);
    } catch (error) {
        console.log("something went wrong in verifying token ", error);
    }
}

module.exports = isLoggedIn;
