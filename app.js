
// adding modules 

const express= require("express");
const bodyParser= require("body-parser");

var list=[];

app=express();

app.use(bodyParser.urlencoded({extended: true}));

// declaring public folder to store css files 

app.use(express.static("public"));
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
	
	// sending the data to html page

	res.render("index", {varday : day,listItems: list});

});


//handling a post request

app.post("/",function(req,res){

	// getting data from the html form 

	let listItem= req.body.input_task;


	// adding data to the list

	list.push(listItem);

	res.redirect("/");
});

app.post("/clear",function(req,res){

	// getting data from the html form 

	list=[];
	
	res.redirect("/");
});



// listening to a port  


app.listen(3000, function(req,res){

	console.log("Server started at 3000");


});

