const _ = require("lodash");
const Product = require("../models/product");
const { errorHandler } = require("../helpers/dbErrorHandler");
const { validationResult } = require('express-validator');

exports.create = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { name, sku, category, tag, price, discount, isnew, rating, saleCount, stock, shortDescription, fullDescription,
    model, performance, storage, camera, battery, display, ram, os } = req.body;

  const createdProduct = new Product({
    image: req.file.path,
    name, sku, category, tag, price, discount, isnew, rating, saleCount, stock, shortDescription, fullDescription,
    model, performance, storage, camera, battery, display, ram, os
  });

  try {
    await createdProduct.save();
  } catch (err) {
    const error = 'Create product is failed, please try again later.';
    return next(error);
  }

  res.status(201).json({ product: createdProduct.toObject({ getters: true }) });
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
    .populate("category")
    .populate("tag")
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
     //.populate("category")   
    // .populate("tag")   
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

exports.remove = (req, res) => {
  let product = req.product;
  product.remove((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json({
      message: "Product deleted successfully"
    });
  });
};

exports.read = (req, res) => {
  //req.product.photo = undefined;
  return res.json(req.product);
};

exports.update = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { name, sku, category, tag, price, discount, isnew, rating, saleCount, stock, shortDescription, fullDescription,
    model, performance, storage, camera, battery, display, ram, os } = req.body;

  try {
    //const updatedProduct = await Product.findOne({ _id: req.product._id });
    const updatedProduct = await Product.findById(req.product._id);
    //console.log("updatedProduct1 " + updatedProduct);

    updatedProduct.image = req.file.path,
    updatedProduct.name = name;
    updatedProduct.sku = sku;
    updatedProduct.category = category;
    updatedProduct.tag = tag;
    updatedProduct.price = price;
    updatedProduct.discount = discount;
    updatedProduct.isnew = isnew;
    updatedProduct.rating = rating;
    updatedProduct.saleCount = saleCount;
    updatedProduct.stock = stock;
    updatedProduct.shortDescription = shortDescription;
    updatedProduct.fullDescription = fullDescription;
    updatedProduct.model = model;
    updatedProduct.performance = performance;
    updatedProduct.storage = storage;
    updatedProduct.camera = camera;
    updatedProduct.battery = battery;
    updatedProduct.display = display;
    updatedProduct.ram = ram;
    updatedProduct.os = os;
    //console.log("updatedProduct2 " + updatedProduct);

    await updatedProduct.save();

    return res.json(updatedProduct);

  } catch (err) {
    const error = 'Update product is failed, please try again later.';
    res.status(500).send('Server Error');

    return next(error);
  }
};
