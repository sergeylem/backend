const express = require("express");
const router = express.Router();
const { list, create, remove, productById, read, update } = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

const fileUpload = require("../helpers/fileUpload");
const { check } = require('express-validator');

const { image } = require("../controllers/product"); //!!! 23.07

router.post("/product/create/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    fileUpload.single('image'),
    [
        check('name', 'Name is required!').not().isEmpty(),
        check('sku', 'SKU code is required!').not().isEmpty(),
        check('category', 'Category is required!').not().isEmpty(),
        check('tag', 'Tag is required!').not().isEmpty(),
        //check('image', 'Image is required!').not().isEmpty(),
        check('price', 'Price is required!').not().isEmpty(),
        check('discount', 'Discount is required!').not().isEmpty(),
        check('saleCount', 'SaleCount is required!').not().isEmpty(),
        check('stock', 'Stock is required!').not().isEmpty(),
        check('shortDescription', 'ShortDescription is required!').not().isEmpty(),
        check('model', 'Model is required!').not().isEmpty()
    ],
    create
);

router.get("/products", list);
router.get("/product/image/:productId", image); //!!! 23.07

router.delete(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

router.get("/product/:productId", read);

router.put(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  fileUpload.single('image'),
  [
    // check('name', 'Name is required!').not().isEmpty(),
    // check('sku', 'SKU code is required!').not().isEmpty(),
    // check('category', 'Category is required!').not().isEmpty(),
    // check('tag', 'Tag is required!').not().isEmpty(),
    //!check('image', 'Image is required!').not().isEmpty(),
    // check('price', 'Price is required!').not().isEmpty(),
    // check('discount', 'Discount is required!').not().isEmpty(),
    // check('saleCount', 'SaleCount is required!').not().isEmpty(),
    // check('stock', 'Stock is required!').not().isEmpty(),
    // check('fullDescription', 'FullDescription is required!').not().isEmpty(),
    // check('model', 'Model is required!').not().isEmpty()
],
  update
);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
