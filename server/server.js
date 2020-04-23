const express = require('express'); 
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
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", `http://${process.env.HOST}`)
	res.header("Access-Control-Allow-Credentials", true)
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
	next();
})
app.response.savedSend = app.response.send;
app.response.send = function(data) {
	console.log("RESPONSE "+ data);	
	return this.savedSend(data);
};

app.use(bodyParser.urlencoded({
	 extended: true 
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
	res.type("json");
	if(isEmptyObject(req.body))
		console.log(req.method +" "+ req.url);
	else
		console.log(req.method +" "+ req.url, req.body);
	next();
});

app.use("/innovation", innovationRoutes);
app.get('/test.php', asyncHandler(async function(req, res) {
	//Get Zone id
	console.log(await innovationDAO.getAllCards());
	console.log("hi")
	// db.get("posts")
	// 	.push({id: shortid.generate(), title: "lowdb is awesome"})
	// 	.write()
	return res.cookie('testing','test').send(`{"live":"success"}`);
}));

let server = app.listen(process.env.SERVER_PORT)
	.on("close", message => console.log("close"))
	.on("connection", message => console.log("app now connected"))
	.on("error", error => console.log("error", error))
	.on("listening", error => console.log(`listening at http://${process.env.HOST}:${process.env.SERVER_PORT}`))
