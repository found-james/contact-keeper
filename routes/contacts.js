const express = require("express");
const router = express.Router();

// private routes

router.get("/", (req, res) => {
    res.send("get all user contacts");
});

router.post("/", (req, res) => {
    res.send("add contact");
});

router.put("/:id", (req, res) => {
    res.send("update contact");
});

router.delete("/:id", (req, res)=> {
    res.send('delete contact');
});

module.exports = router;
