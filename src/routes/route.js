const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const validation = require("../middleware/auth")


router.post("/createUser",  UserController.createUser)
router.post("/userlogin",  UserController.userlogin)
router.get("/getUser/:userId", validation.headerValidation, validation.authorise,UserController.getUser)
router.put("/updateUser/:userId", validation.headerValidation,  validation.authorise,UserController.updateUser)
router.delete("/deleteUser/:userId", validation.headerValidation, validation.authorise,UserController.deleteUser)
module.exports = router;
