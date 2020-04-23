const express = require('express'); 
const path = require('path');
var dotenv = require('dotenv').config({path: __dirname + '/../.env'});
const innovationDAO = require("./lib/DAO/InnovationDAO");
const {
	logger,
	isEmptyObject,
	asyncHandler
} =  require("./utils.js")
console.log = logger;
var bodyParser = require('body-parser');
const innovationRoutes = require("./routes/innovation")
let app = express();

app.response.savedSend = app.response.send;
app.response.send = function(data) {
	console.log("RESPONSE "+ data);	
	return this.savedSend(data);
};

app.use(bodyParser.urlencoded({
	 extended: true 
}));
app.use(bodyParser.json());

//serve UI 
console.log(__dirname+"/../public");
app.use(express.static(__dirname+"/../public"));
app.use("/api/innovation", innovationRoutes);
app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/rest/test.php', asyncHandler(async function(req, res) {
	console.log(await innovationDAO.getAllCards());
	console.log("hi")
	return res.cookie('testing','test').send(`{"live":"success"}`);
}));

let server = app.listen(process.env.SERVER_PORT)
	.on("close", message => console.log("close"))
	.on("connection", message => console.log("app now connected"))
	.on("error", error => console.log("error", error))
	.on("listening", error => console.log(`listening at http://${process.env.HOST}:${process.env.SERVER_PORT}`))
