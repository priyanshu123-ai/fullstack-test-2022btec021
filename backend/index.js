import express from "express"

import dotenv from "dotenv"
import dbConnected from "./utils/database.js";

import contactRouter from "./routes/ContactRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config();



const app = express();
app.use(cookieParser());

app.use(express.json())


const port = process.env.PORT || 5000;

dbConnected()



app.use(
    cors({
        origin:["http://localhost:5173"],
        credentials:true
    })
)

// app.use("/api/v1",userRouter)
app.use("/api/v2",contactRouter)

app.listen(port,() => {
    console.log(`Server is Running at ${port}`)
} )