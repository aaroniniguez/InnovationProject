const express = require("express");
const innovationDAO = require("../lib/DAO/InnovationDAO");
const router = express.Router();

//get all cards
router.get("/cards", async function(req, res, next) {
    let cards = await innovationDAO.getAllCards();
    res.send(cards);
    next();
})
module.exports = router;