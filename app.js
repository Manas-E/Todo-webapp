
// adding modules 

const express= require("express");
const bodyParser= require("body-parser");

const date= require(__dirname+ "/date.js");


var list=[];
var workList=[];


app=express();

app.use(bodyParser.urlencoded({extended: true}));

// declaring public folder to store css files 

app.use(express.static("public"));
//setting up ejs file location
// this looks for the ejs file in views folder

app.set("view engine","ejs")
//calling get 




app.get("/",function(req,res){

	
	
	// sending the data to html page
	let day = date.getDay();




	res.render("index", {listTitle : day,listItems: list});

});


//handling a post request

app.post("/",function(req,res){

	// getting data from the html form 

	let listItem= req.body.input_task;

	let  listType= req.body.list;

	let  clear_var = req.body.clear;

	
	console.log(listItem,listType);


	if(listItem== null){

		if(clear_var== "Work")
		{

			workList=[];
			console.log("alright");


			res.redirect("/work");
		}
		else{
		
		list=[];

		res.redirect("/");
			
		}
	
		workList=[];list=[];
	}
	else{

		if(listType=="Work")
		{

			workList.push(listItem);

			res.redirect("/work");
		}
		else{
			
			list.push(listItem);

			res.redirect("/");			
		}

	// adding data to the list
		
	}
	

});

app.post("/clear",function(req,res){

	// getting data from the html form 


	let  listType= req.body.clear;

	console.log(listType);


	if(listType=="Work")
		{

			workList.pop();


			console.log(workList);

			res.redirect("/work");
		}
		else{
			
			list.pop();


			res.redirect("/");			
		}

});



app.get("/work",function(req,res){

	res.render("index", {listTitle : "Work List",listItems: workList});



});

// listening to a port  


app.listen(3000, function(req,res){

	console.log("Server started at 3000");


});

