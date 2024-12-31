import { config } from "dotenv";
import mongoose from "mongoose";
config()

const url = process.env.Mongo_Url //provide your mongodb url here

const dbConnect = async () => {
    try {
        await mongoose.connect(url)
        console.log("database connected");
    } catch (err) {
        console.log(err.message);
    }
}

export default dbConnect