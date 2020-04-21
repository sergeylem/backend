const Specification = require("../models/specification");
const { errorHandler } = require("../helpers/dbErrorHandler");
//const fs = require("fs");

const formidable = require("formidable");
const _ = require("lodash");

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;                 //!!! Using body-parser with formidable
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Error!"
            });
        }
        let specification = new Specification(fields);

        // if (files.image) {
        //     // product.image.data = fs.readFileSync(files.image.path);
        //     // product.image.contentType = files.image.type;
        //     product.image = fs.readFileSync(files.image.path);
        // }

        specification.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler("!") 
                });
            }
            res.json(result);
        });
    });
};
