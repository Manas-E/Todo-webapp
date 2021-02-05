
// adding modules 

const express= require("express");
const bodyParser= require("body-parser");


app=express();

//calling get 

app.get("/",function(req,res){



res.send("Hello");



});


// listening to a port  





app.listen(3000, function(req,res){

	console.log("Server started at 3000");


});