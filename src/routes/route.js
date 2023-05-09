const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const validation = require("../middlewares/commonMiddlewares")

// const commonMW = require ("../middlewares/commonMiddlewares")



router.post("/createUser",  UserController.createUser)
router.post("/userlogin",  UserController.userlogin)
router.get("/getUser/:userId", validation.headerValidation, UserController.getUser)
router.put("/updateUser/:userId", validation.headerValidation,  UserController.updateUser)
router.delete("/deleteUser/:userId", validation.headerValidation, UserController.deleteUser)
module.exports = router;