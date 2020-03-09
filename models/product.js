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
            maxlength: 45
        },
        image: [{
            type: String,
            required: true,
            maxlength: 55
        }],
        category: [{
            type: String,
            required: true,
            maxlength: 30
        }],
        tag: [{
            type: String,
            required: true,
            maxlength: 50
        }],
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
        specification: {
            type: ObjectId,
            ref: "Specification", 
            required: false  //Temporary false!!!
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
