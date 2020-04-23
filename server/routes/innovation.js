const express = require("express");
const innovationDAO = require("../lib/DAO/InnovationDAO");
const router = express.Router();
const {
	isEmptyObject,
} =  require("../utils.js")

router.use(function (req, res, next) {
	res.type("json");
	if(isEmptyObject(req.body))
		console.log(req.method +" "+ req.url);
	else
		console.log(req.method +" "+ req.url, req.body);
	next();
});

router.use(function(req, res, next) {
    let allowedOrigins = [
        `http://${process.env.HOST}`,
        `https://${process.env.HOST}`,
    ];
    let origin = req.headers.origin;
    if(allowedOrigins.includes(origin)){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
	res.header("Access-Control-Allow-Credentials", true)
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
	next();
})
//get all cards
router.get("/cards", async function(req, res, next) {
    let cards = await innovationDAO.getAllCards(req.query.icon, req.query.color, req.query.age, req.query.description);
    return res.send(cards);
})

router.get("/cards/:cardName", async function(req, res, next) {
    let cardName = req.params.cardName.replace(/\_/g, " ");
    let cards = await innovationDAO.getCard(cardName)
    return res.send(cards);
});

module.exports = router;