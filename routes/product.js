const express = require("express");
const router = express.Router();
const { create } = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

const { check } = require('express-validator');

const {
    list
    // productById, 
    // image
} = require("../controllers/product");

router.post("/product/create/:userId", [
    check('name', 'Name is required!').not().isEmpty(),
    check('sku', 'SKU code is required!').not().isEmpty(),
    check('category', 'Category is required!').not().isEmpty(),
    check('tag', 'Tag is required!').not().isEmpty(),
    check('image', 'Image is required!').not().isEmpty(),
    check('price', 'Price is required!').not().isEmpty(),
    check('discount', 'Discount is required!').not().isEmpty(),
    check('saleCount', 'SaleCount is required!').not().isEmpty(),
    check('stock', 'Stock is required!').not().isEmpty(),
    check('shortDescription', 'ShortDescription is required!').not().isEmpty(),
    check('model', 'Model is required!').not().isEmpty(),
    check('performance', 'Performance is required!').not().isEmpty()
],
    create,
    requireSignin,
    isAuth,
    isAdmin
);

router.get("/products", list);

//router.get("/product/image/:productId", image);

router.param("userId", userById);
//router.param("productId", productById);

module.exports = router;
