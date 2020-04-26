const express = require("express");
const router = express.Router();
const { create } = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const Product = require('../models/product');

const { check, validationResult } = require('express-validator');

const {
    list
    // productById, 
    // image
} = require("../controllers/product");

router.post("/product/create/:userId",
    [
        check('name')
            .not()
            .isEmpty()
            .withMessage('Name is required'),
        check('sku')
            .not()
            .isEmpty()
            .withMessage('SKU Code is required')
            .isLength({ max: 7 })
            .withMessage('SKU Code of max 7 symbols is required'),
        check('price')
            .isNumeric()
            .withMessage('Price must contain numbers'),
        check('discount')
            .isNumeric()
            .withMessage('Discount must contain numbers')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        /*        let form = new formidable.IncomingForm();   //formidable for parsing form data, especially file uploads
                form.keepExtensions = true;                 //!!! Using body-parser with formidable
                form.parse(req, (err, fields, files) => {
                    if (err) {
                        return res.status(400).json({
                            error: "Image could not be uploaded"
                        });
                    }
        */
        const { name, sku, image, category, tag, price, discount, rating, saleCount,
            stock, shortDescription, fullDescription, model, performance } = req.body;

        try {
            let product = new Product({
                name, sku, image, category, tag, price, discount, rating, saleCount,
                stock, shortDescription, fullDescription, model, performance
            });

            await product.save((err, result) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                res.json(result);
            });

        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');

        }
        //        });
    },

    //    create,
    // requireSignin,
    // isAuth,
    // isAdmin
);

router.get("/products", list);

//router.get("/product/image/:productId", image);

router.param("userId", userById);
//router.param("productId", productById);

module.exports = router;
