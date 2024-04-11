import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.router.js"


dotenv.config();

const app = express();

app.use(express.json())

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

app.use("/api/user",userRoutes);
app.use("/api/auth", authRoutes);




// middleware for error handling (mainly for checking uniuq username and email)


app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server Error';
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})