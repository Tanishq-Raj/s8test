import express from "express";
import {
  addToSavedProperties,
  getProperties,
  getSavedProperties,
  googleAuth,
  googleAuthCallback,
  login,
  logout,
  removeFromSavedProperties,
  userRegister,
  verifyOTP,
  getPropertyById,
} from "../controllers/userController.js";
import userAuth from "../middlewares/authUser.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/otp-verification", verifyOTP);
userRouter.post("/login", login);
userRouter.get("/logout", userAuth, logout);

userRouter.get("/auth/google", googleAuth);
userRouter.get("/auth/google/callback", googleAuthCallback);
userRouter.get("/profile", userAuth, (req, res) => {
    res.json({success: true, message: "Yeeee"})
  })
userRouter.get("/auth-check", userAuth, (req, res) => {
  res.json({success: true, message: "Logged in Successfully"})
  
})

userRouter.get("/get-properties", userAuth, getProperties);
userRouter.get("/add-to-saved-properties", userAuth, addToSavedProperties);
userRouter.get("/get-saved-properties", userAuth, getSavedProperties);
userRouter.get("/remove-from-saved-properties", userAuth, removeFromSavedProperties);
userRouter.post("/get-property-by-id", userAuth, getPropertyById)


export default userRouter;
