const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Product = require("../models/product");
const { errorHandler } = require("../helpers/dbErrorHandler");

//const { validationResult } = require('express-validator');

exports.create = (req, res) => {
    //   exports.create = async (req, res, next) => {

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }

        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(422).json({ errors: errors.array() });
        // }

        // let product = new Product(fields);
        // let product = new Product(req.body);

        // const { name, sku, category, tag, price, discount, isnew, rating, saleCount, stock, shortDescription, fullDescription, 
        //     model, performance, storage, camera, battery, display, ram, os } = req.body;

        // let existingProduct;
        // try {
        //     existingProduct = await Product.findOne({ sku: sku });
        // } catch (err) {
        //   const error = 'The connection error, please try again later.';        
        //   return next(error);
        // }

        // if (existingProduct) {
        //     const error = 'SKU code exists already, please choose another.';
        //     return next(error);
        //   }

        //   const createdProduct = new Product({
        //     name, sku,
        //     // image: req.file.path,
        //     category, tag, price, discount, isnew, rating, saleCount, stock, shortDescription, fullDescription, 
        //     model, performance, storage, camera, battery, display, ram, os
        //   });

        let product = new Product(fields);

        if (files.image) {
            console.log("FILES Image: ", files.image);
            if (files.image.size > 1000000) {
                return res.status(400).json({
                    error: "Image should be less than 1mb in size"
                });
            }
            product.image.data = fs.readFileSync(files.image.path);
            console.log("FILES path: ", files.image.path);
            product.image.contentType = files.image.type;
        }

        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });

    });
    //   try {
    //     await createdProduct.save();
    //   } catch (err) {
    //     const error = 'Signing up failed, please try again later.';
    //     return next(error);
    //   }

    //   res.status(201).json({ product: createdProduct.toObject({ getters: true }) });

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

