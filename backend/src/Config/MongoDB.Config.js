import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const connectionString = process.env.MONGODB_URI;

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to Mongodb");
    } catch (error) {
        console.log(error);
    }
};
