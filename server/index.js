import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("DB connected successfully");

    app.listen(PORT, () =>{
        console.log(`Server is running on port: ${PORT}`);
    })
}).catch(error => console.error(error));


app.use("/api",route);