const express = require("express");
const router = express.Router();

//const { check } = require('express-validator');

const {
    signup,
    signin,
    signout} = require("../controllers/auth");
//const { userSignupValidator } = require("../validator");

router.post("/signup", 
// [
//     check('name')
//     //            .not()
//     .isLength({ min: 4 })
//     .withMessage('Name is min 4 required')],
signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
