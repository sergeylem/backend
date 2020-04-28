const { check, validationResult } = require('express-validator');

exports =  
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
.withMessage("Password must contain a number")
    
}