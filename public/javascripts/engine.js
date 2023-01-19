var x = 0;
var wordArray = [];
var guessword = "chess";
var holdArray = [];
document.addEventListener("keydown", (e) =>{
	x=x+1;
	if(x<6){
		console.log(e.key + "- " + x);
		holdArray.push(e.key);
	}
	else if(x=6){
		console.log(holdArray);
		if(holdArray.join("") == guessword){
			console.log("correct");
		}
		wordArray.push(holdArray);
		holdArray = [];
		x=0;
	}
});
