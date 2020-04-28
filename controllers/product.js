//const formidable = require("formidable");
const _ = require("lodash");
//const fs = require("fs");
const Product = require("../models/product");
const { errorHandler } = require("../helpers/dbErrorHandler");
//const errorFields  = require("../helpers/dbErrorProductHandler");

const { validationResult } = require('express-validator');

exports.create = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // let form = new formidable.IncomingForm(); // formidable use for parsing form data, especially file uploads.
    // form.keepExtensions = true;                 //!!! Using body-parser with formidable
    // form.parse(req, (err, fields, files) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: "Image could not be uploaded"
    //         });
    //     }

        // let error = errorFields.dbErrorProductHandler(fields);
        // if (error) {
        //     return res.status(400).json({
        //         error: error
        //     });
        // }

        // let product = new Product(fields);
        let product = new Product(req.body);

        // if (files.image) {
        //     // pro   duct.image.data = fs.readFileSync(files.image.path);
        //     // product.image.contentType = files.image.type;
        //     product.image = fs.readFileSync(files.image.path);
        // }

        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
//    });
};

//It reads all the items present in database
// exports.fetchItems = async (req, reply) => {
//   try {
//     const products = await Product.find();
// //    return products
//   }
//   catch (err) { console.log(err) }
// }

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : "asc";
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 50;  //!!! LIMIT 50

    Product.find()
        //         .select("-image")     //this line hides image field in GET
        .select()
        .populate("specification")
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: "Products not found"
                });
            }
            res.json(products);
        });
};

exports.productById = (req, res, next, _id) => {
    Product.findById(_id)
        .populate("specification")   //this is line if we have category table (from Rayan) 
        .exec((err, product) => {
            if (err || !product) {
                return res.status(400).json({
                    error: "Product not found"
                });
            }
            req.product = product;
            next();
        });
};

exports.image = (req, res, next) => {  // HARDCODE image[0] !!! Only 1 image
    if (req.product.image[0]) {
        //        res.set("Content-Type", req.product.image[0].contentType);
        return res.send(req.product.image[0]);
    }
    next();
};

// exports.image2 = (req, res, next) => {  // HARDCODE image[0] !!! Only 1 image
//     if (req.product.image[1]) {
// //        res.set("Content-Type", req.product.image[1].contentType);
//         return res.send(req.product.image[1]);
//     }
//     next();
// };

