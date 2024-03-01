const verifyToken = require("../utils/verifyToken")

const isLoggedIn = async (req, res, next) => {
    try {
        const decodedId = await verifyToken(req);
        if(!decodedId){
            res.json({
                msg: "Invalid / Expires Token"
            })
        } else {
            req.userAuthId = decodedId?.id;
            next();
        }

    } catch (error) {
        console.log("Something went wrong in verifying token ", error);
    }
}

module.exports = isLoggedIn;
