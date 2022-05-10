const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const dotEnv = require("dotenv");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

router.post("/", [ 
    check("name", "name is required").not().isEmpty(), 
    check("email", "include a valid email").isEmail(), 
    check("password", "enter a password with more than 6 characters").isLength({ min: 6 })], 
    async (req, res) => {
        const errors = validationResult( req );

        if(!errors.isEmpty()){
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({ email: email });

            if (user){
                return res.status(400).json({ msg: "user already exists" });
            }

            user = await User.create({ name, email, password });
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);
            await user.save();
            
            const payload = {
                user: {
                    id : user.id
                }
            }

            jwt.sign(payload, )

        } catch (err) {
            res.status(500).json({ success: false, msg: err.message });
        }
});

module.exports = router;
