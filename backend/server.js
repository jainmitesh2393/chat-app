import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoose from "./db/connectToMongoose.js";

const app=express();
dotenv.config();

const PORT=process.env.PORT || 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)
app.use(cookieParser())

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT,()=>{
    
    console.log(`Server is running at ${PORT}`);
    connectToMongoose()
    
})