import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
// import videoRoutes from "./routes/videos.js";
// import commentRoutes from "./routes/comments.js"


app.use(cookieParser())
app.use(express.json())
const app = express();
dotenv.config();
const port = 7000;

const connect = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{

        console.log("connecte to db");

    }).catch(err=>{
        throw err
    })
};



app.use("/api/users", authRoutes)
app.use("/api/users", userRoutes)
// app.use("/api/videos", videoRoutes)
// app.use("/api/comments", commentRoutes)


app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "something went wrong"
    return res.status(status).json({
        success:false,
        status,
        message,
    });
});

app.listen (port, () => {
    connect()
    console.log(`connected ${port}`);
})