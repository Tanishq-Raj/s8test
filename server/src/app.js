import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";
import connectDB from "./db/index.js";
import passport from "./middlewares/googleAuth.js"; ////////////////
import bankUserRouter from "./routes/bankUserRouter.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();

app.set('trust proxy', 1);
// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:4000", "https://s8test-bank-frontend.onrender.com", "https://s8test-client.onrender.com"],
  credentials: true,
}));

// DB connection
connectDB();
connectCloudinary();

// Initialize passport
app.use(passport.initialize());

// api endpoints
app.use("/api/v1/user", userRouter);
app.use("/api/v1/bank-user", bankUserRouter);

export { app }
