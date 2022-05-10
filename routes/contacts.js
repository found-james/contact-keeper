const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");

const { check, validationResult } = require("express-validator");

// private routes
// get all contacts of a specific user
router.get("/", auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 }); // arr
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

// create contact for a specfic user
router.post("/", [auth, check("name", "name is required").not().isEmpty()], async (req, res) => {
    const errors = validationResult( req );

    if(!errors.isEmpty()){
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
        const newContact = await Contact.create({ name, email, phone, type, user: req.user.id });
        const contact = await newContact.save();

        res.json(contact);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }

});

router.put("/:id", (req, res) => {
    res.send("update contact");
});

router.delete("/:id", (req, res)=> {
    res.send('delete contact');
});

module.exports = router;
