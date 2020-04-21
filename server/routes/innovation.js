const express = require("express");
const innovationDAO = require("../lib/DAO/InnovationDAO");
const router = express.Router();

//get all cards
router.get("/cards", async function(req, res, next) {
    let cards = await innovationDAO.getAllCards(req.query.icon);
    res.send(cards);
    next();
})

router.get("/cards/:cardName", async function(req, res, next) {
    let cardName = req.params.cardName.replace(/\_/g, " ");
    let cards = await innovationDAO.getCard(cardName)
    res.send(cards);
});
module.exports = router;