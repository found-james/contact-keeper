const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

router.post("/", [ 
    check("name", "name is required").not().isEmpty(), 
    check("email", "include a valid email").isEmail(), 
    check("password", "enter a password with more than 6 characters").isLength({ min: 6 })], 
    (req, res) => {
        const errors = validationResult( req );
        if(!errors.isEmpty()){
            return res.status(400).json({ success: false, errors: errors.array() });
        }
});

module.exports = router;
