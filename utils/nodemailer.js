import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.Mail_Username,//provide your email
        pass: process.env.Mail_Password//provide your password
    }
})

export default transporter