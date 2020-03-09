const Specification = require("../models/specification");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const specification = new Specification(req.body);
    specification.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};
