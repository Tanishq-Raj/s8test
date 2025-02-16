import express from "express";
import {
  addProperties,
  bankUserRegister,
  deleteProperty,
  getProperties,
  getPropertyById,
  login,
  logout,
  topAuctioners,
  updateProperties,
  verifyOTP,
} from "../controllers/bankUserController.js";
import bankUserAuth from "../middlewares/bankUser.js";
import upload from "../middlewares/multer.js";  

const bankUserRouter = express.Router();

bankUserRouter.post("/register", bankUserRegister);
bankUserRouter.post("/otp-verification", verifyOTP);
bankUserRouter.post("login", login);
bankUserRouter.get("/logout",bankUserAuth, logout);
bankUserRouter.post("/add-property", bankUserAuth, upload.array('files'), addProperties)
bankUserRouter.post("/update-property", bankUserAuth, upload.array('files'), updateProperties)
bankUserRouter.get("/delete-property", bankUserAuth, deleteProperty)
bankUserRouter.get("/get-property", bankUserAuth, getProperties)
bankUserRouter.post("/get-property-by-id", bankUserAuth, getPropertyById)
bankUserRouter.get("/top-auctioners",bankUserAuth, topAuctioners)

export default bankUserRouter;
