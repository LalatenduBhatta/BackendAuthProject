import jwt from "jsonwebtoken"

export const verifyToken = async (req, res, next) => {
    try {
        // const token = req.headers.authorization.split(" ")[1]
        // console.log(req.cookies.auth_token);
        const token = req.cookies.auth_token
        const { userId } = jwt.verify(token, process.env.JWT_Secret) //use your own secret key
        req.userId = userId
        next()
    } catch (error) {
        res.status(400).send({ error: "Invalid Token", errorMsg: error.message })
    }
}