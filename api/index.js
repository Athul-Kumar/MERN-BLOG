import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js"

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb is connected!!");
  })
  .catch((err) => {
    console.log(err);
  });


const app = express();
app.use(express.json())
// express.json() --> used for accepting data from insomnia api

app.listen(3000, ()=>{
    console.log("Server is running on port 3000....")
})


app.use("/api/user",userRouter);
app.use("/api/auth", authRouter)