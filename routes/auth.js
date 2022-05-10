
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

router.get("/", (req, res) => {
    res.send('get logged user');
});

router.post("/", [ check("email", "include a valid email").isEmail(), check("password", "password is required").exists()], async (req, res) => {
    const errors = validationResult( req );

    if(!errors.isEmpty()){
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ msg: "invalid credentials"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "passwords do not match"});
        }

        const payload = {
            user: {
                id : user.id
            }
        }

        jwt.sign(payload, process.env.secret, {
            expiresIn: 3600
        }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

module.exports = router;
