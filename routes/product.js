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
}
    = require("../controllers/product");

//const { createProductValidator } = require("../validator");

router.post("/product/create/:userId",
    //    createProductValidator,
    [
        check('name')
            //            .not()
            .isLength({ min: 4 })
            .withMessage('Name is min 4 required')],
    requireSignin,
    isAuth,
    isAdmin,
    create);

router.get("/products", list);

//router.get("/product/image/:productId", image);

router.param("userId", userById);
//router.param("productId", productById);

module.exports = router;
