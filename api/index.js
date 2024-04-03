import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js"


dotenv.config();


const app = express();
app.listen(3000, () => {
  console.log("the server is running on port 3000!!!!");
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("successfully connected to mongodb cluster!!");
  })
  .catch((err) => {
    console.log(err);
  });


app.use("/api/user",userRouter);