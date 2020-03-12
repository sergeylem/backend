const express = require("express");
const router = express.Router();

const { create } = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

const { 
    list
    // , 
    // productById, 
    // image
} 
    = require("../controllers/product");

router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);

router.get("/products", list);

//router.get("/product/image/:productId", image);

router.param("userId", userById);
//router.param("productId", productById);

module.exports = router;
