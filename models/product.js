const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    // id: {
    //     type: Number,
    //     trim: true,
    //     required: true,
    //     maxlength: 32
    // },
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 45
    },
    sku: { //must be uniq !!!!! and must be checked for uniqueness
      type: String,
      unique: true,
      trim: true,
      required: true,
      maxlength: 7
    },
    // image: {
    //     data: Buffer,
    //     contentType: String
    // },
    image: [{
      type: String,
      //required: true,
      maxlength: 80  //Is it enough? 200
    }],
    // category: [{
    //     type: String,
    //     required: true,
    //     maxlength: 30
    // }],
    category: {
      type: ObjectId,
      ref: "Category",
      required: true  
    },
    // tag: [{
    //   type: String,
    //   required: true,
    //   maxlength: 50
    // }],
    tag: {
      type: ObjectId,
      ref: "Tag",
      required: true  
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32
    },
    discount: {
      type: Number,
      default: 0,
      trim: true,
      required: true,
      maxlength: 32
    },
    isnew: {
      type: Boolean
    },
    rating: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 1
    },
    saleCount: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 4
    },
    stock: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 3
    },
    shortDescription: {
      type: String,
      required: true,
      maxlength: 500
    },
    fullDescription: {
      type: String,
      maxlength: 2000
    },
    //specification
    model: {
      type: String,
      trim: true,
      required: true,
      maxlength: 30  // iPhone 11
    },
    performance: {
      type: String,
      trim: true,
      maxlength: 100  // Apple A13 Bionic
    },
    storage: {
      type: String,
      trim: true,
      maxlength: 4 // 1024 + "GB"
    },
    camera: {
      type: String,
      trim: true,
      maxlength: 100  // 12 MP + 12 MP
    },
    battery: {
      type: String,
      trim: true,
      maxlength: 4  // 3110 + "mAh"
    },
    display: {
      type: String,
      trim: true,
      maxlength: 4 // 6.1 + '"'
    },
    ram: {
      type: String,
      trim: true,
      maxlength: 4  // 256 + "GB"
    },
    os: {
      type: String,
      trim: true,
      maxlength: 12  // Android 
    }

    // specification: {
    //     type: ObjectId,
    //     ref: "Specification",
    //     required: false  //Temporary false!!!
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
