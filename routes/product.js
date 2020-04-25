const express = require("express");
const router = express.Router();
const { create } = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

//const { check } = require('express-validator');

const {
    list
    // productById, 
    // image
} = require("../controllers/product");

router.post("/product/create/:userId", 
// [
//     check('name')
//         .not()
//         .isEmpty()
//         .withMessage('Name is required'),
//     check('sku')
//         .not()
//         .isEmpty()
//         .withMessage('SKU Code is required')
//         .isLength({ max: 7 })
//         .withMessage('SKU Code of max 7 symbols is required'),
//     check('price')
//         .isNumeric()
//         .withMessage('Price must contain numbers'),
//     check('discount')
//         .isNumeric()
//         .withMessage('Discount must contain numbers')
// ],
    requireSignin,
    isAuth,
    isAdmin,
    create);

router.get("/products", list);

//router.get("/product/image/:productId", image);

router.param("userId", userById);
//router.param("productId", productById);

module.exports = router;
