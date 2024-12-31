import express from "express"
import cors from "cors"
import { config } from "dotenv"
import dbConnect from "./db/dbConnect.js"
import userRouter from "./routers/userRouter.js"
import { otpRouter } from "./routers/otpRouter.js"
import cookieParser from "cookie-parser"
import morgan from "morgan"

const app = express()

// middlewares
config()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(morgan('dev'))

//routers
app.use("/user", userRouter)
app.use("/otp", otpRouter)

//PORT and hostname
const PORT = process.env.PORT || 80
const hostname = process.env.hostname || "localhost"
//listen method
app.listen(PORT, hostname, () => {
    console.log(`server is running at http://${hostname}:${PORT}`);
    dbConnect()
})


