const express = require("express");
const router = express.Router();

const { check } = require('express-validator');

const {
    signup,
    signin,
    signout } = require("../controllers/auth");

//const { userSignupValidator } = require("../validator");

router.post("/signup", [
    check('name', 'Name is required!')
        .not()
        .isEmpty(),
    check('surname', 'Surname is required!')
        .not()
        .isEmpty(),
    check('email', 'Email is required!')
        .isEmail(),
    check('password', 'Password is min 6 required!')
        .isLength({ min: 6 })
        .matches(/\d/)
        .withMessage("Password must contain a number!")], signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
