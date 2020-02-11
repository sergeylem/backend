const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        sku: {
            type: String,
            trim: true,
            required: true,
            maxlength: 7
        },
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
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
        new: {
            required: false,
            type: Boolean
        },
        rating: {
            type: Number,
            trim: true,
            maxlength: 1
        },
        saleCount: {
            type: Number,
            trim: true,
            maxlength: 4
        },
        category: {
            type: String,
            required: true,
            maxlength: 30
        },
        tag: {
            type: String,
            required: true,
            maxlength: 30
        },
        stock: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 3
        },
        image: {
            data: Buffer,
            contentType: String
        },
        shortDescription: {
            type: String,
            required: true,
            maxlength: 500
        },
        fullDescription: {
            type: String,
            maxlength: 2000
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
