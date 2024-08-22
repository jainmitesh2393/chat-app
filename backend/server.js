import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import connectToMongoose from "./db/connectToMongoose.js";

const app=express();
dotenv.config();

const PORT=process.env.PORT || 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    
    console.log(`Server is running at ${PORT}`);
    connectToMongoose()
    
})