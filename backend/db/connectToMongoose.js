import mongoose from "mongoose";

const connectToMongoose=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MONGO DB")
    } catch (error) {
        console.log("Error connecting to mongodb",error.message)
        process.exit(1);
    }
}

export default connectToMongoose