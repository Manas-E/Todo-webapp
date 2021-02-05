
// adding modules 

const express= require("express");
const bodyParser= require("body-parser");


app=express();

app.use(bodyParser.urlencoded({extended: true}));

//setting up ejs file location
// this looks for the ejs file in views folder

app.set("view engine","ejs")
//calling get 

app.get("/",function(req,res){

	
	// creating a date variable
	
	let today= new Date();
	let options={weekday: "long",
					day: "numeric",
					month:"long" }
	
	let day="";
	
	
	// formating the day according to the options
	
	day=today.toLocaleDateString("en-US",options);
	
	console.log(day);

	res.render("index", {varday : day});

});


// listening to a port  





app.listen(3000, function(req,res){

	console.log("Server started at 3000");


});