const express = require("express");
const router = express.Router();

const { check } = require('express-validator');

const {
    signup,
    signin,
    signout } = require("../controllers/auth");

//const { userSignupValidator } = require("../validator");

router.post("/signup", [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('surname')
        .not()
        .isEmpty()
        .withMessage('Surname is required'),
    check('email')
        .isEmail()
        .withMessage('Email is required'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password is min 6 required')
        .matches(/\d/)
        .withMessage("Password must contain a number")], signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
