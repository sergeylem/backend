const mongoose = require("mongoose");

const specificationSchema = new mongoose.Schema(
    {
        model: {
            type: String,
            trim: true,
            required: true,
            maxlength: 30  // iPhone 11
        },
        performance: {
            type: String,
            trim: true,
            required: false,
            maxlength: 150  // Apple A13 Bionic
        },
        storage: {
            type: String,
            trim: true,
            required: false,
            maxlength: 3 // 64 + "GB"
        },
        camera: {
            type: String,
            trim: true,
            required: false,
            maxlength: 100  // 12 MP + 12 MP
        },
        battery: {
            type: String,
            trim: true,
            required: false,
            maxlength: 4  // 3110 + "mAh"
        },
        display: {
            type: String,
            trim: true,
            required: true,
            maxlength: 4 // 6.1 + '"'
        },
        ram: {
            type: String,
            trim: true,
            required: false,
            maxlength: 5  // 4 + "GB"
        },
        os: {
            type: String,
            trim: true,
            required: false,
            maxlength: 12  // Android 
        }

        // ,
        // shortDescription: {
        //     type: String,
        //     trim: true,
        //     required: true,
        //     maxlength: 500
        // },
        // fullDescription: {
        //     type: String,
        //     maxlength: 2000
        // }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Specification", specificationSchema);
