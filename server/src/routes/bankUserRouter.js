import express from "express";
import {
  addProperties,
  bankUserRegister,
  deleteProperty,
  getProperties,
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
// bankUserRouter.post("/add-property", bankUserAuth, (req, res) => {
//   const {data} = req.body
//   // const file = req.files
//   // const {files} = req.files
//   res.json({ success: true, message: {data} });
// })

// import multer from 'multer';
// const upload = multer({ dest: 'uploads/' });
// bankUserRouter.post("/add-property", bankUserAuth, upload.array('files'), (req, res) => {
//   console.log("Middleware executed");
// });


// bankUserRouter.post("/add-property", bankUserAuth, upload.array("images", 5), (req, res, next) => {
//   console.log("Middleware executed");
//   next();
// }, (req, res) => {
//   console.log("files: ", req.files);
//   console.log(req.body);
//   console.log("Final controller executed");
//   res.send("Files uploaded successfully");
// });

// Multer error handling middleware
bankUserRouter.use((err, req, res, next) => {
  console.error("Multer Error:", err);
  res.status(500).json({ error: err.message });
});



bankUserRouter.post("/add-property", bankUserAuth, upload.array('files'), addProperties)
bankUserRouter.post("/update-property", bankUserAuth, upload.array('files'), updateProperties)
bankUserRouter.get("/delete-property", bankUserAuth, deleteProperty)
bankUserRouter.get("/get-property", bankUserAuth, getProperties)
bankUserRouter.get("/top-auctioners",bankUserAuth, topAuctioners)

export default bankUserRouter;
