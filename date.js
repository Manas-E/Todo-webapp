	

	exports.getDate= function(){
	// creating a date variable
	
	let today= new Date();
	let options={weekday: "long",
					day: "numeric",
					month:"long" }
	
	let day="";
	
	
	// formating the day according to the options
	
	
	return today.toLocaleDateString("en-US",options);

	}

	exports.getDay = function(){
	// creating a date variable
	
	let today= new Date();
	
	
	let options={weekday: "long"}
	
	return today.toLocaleDateString("en-US",options);

	}
