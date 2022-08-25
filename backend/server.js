import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/user-routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE).then(() => {
  console.log("DB is Connected");
});

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/", userRoute);

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
