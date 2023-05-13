const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const validation = require("../middleware/auth")


router.post("/createUser",  UserController.createUser)
router.post("/userlogin",  UserController.userlogin)
router.get("/getUser/:userId", validation.headerValidation, validation.authorise, UserController.getUser)
router.put("/updateUser/:userId", validation.headerValidation,  validation.authorise,UserController.updateUser)
router.delete("/deleteUser/:userId", validation.headerValidation, validation.authorise,UserController.deleteUser)
module.exports = router;


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDVlNTJmNGZkNzM3MTVmODlhODFjZWYiLCJpYXQiOjE2ODM5MDM4MzJ9.lJc6jd2jwPffWfPZxYDkDBLYM1QtDTR2ZMgYHGm1VSY