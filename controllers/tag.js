const Tag = require("../models/tag");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const tag = new Tag(req.body);
    tag.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.list = (req, res) => {
    Tag.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
