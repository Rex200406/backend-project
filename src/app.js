//import "./db/index.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser()) 

export {app}



// app.listen(3000, () => {
//   console.log("Server started");
// });










// //routes import
// import userRouter from  './routes/user.routes.js'


// //routes declaration
// app.use("/api/v1/users",userRouter)     //api version

// //http://localhost:8000/api/v1/users/login

