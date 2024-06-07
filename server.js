import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import orderRoute from "./routes/order.route.js";
import gigRoute from "./routes/gig.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

// --------------------------------SERVER -----------------------------------
const connect = async () => {
  try {
    await mongoose.connect(process.env.mongoose);
   
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gig", gigRoute);
app.use("/api/review", reviewRoute);
app.use("/api/order", orderRoute);
app.use("/api/message", messageRoute);
app.use("/api/conversation", conversationRoute);

app.listen(8800, () => {
  connect();
  console.log("Backend Server is running");
});
