const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const OrderController= require("../controllers/OrderController")
const productController = require("../controllers/productController")
const middleware=require("../middleware/middleware")



router.post("/createUser",middleware.headerValidation, userController.createUser)
router.post("/createOrder",middleware.headerValidation, OrderController.createOrder)
router.post("/createProduct", productController.createProduct)


module.exports = router;