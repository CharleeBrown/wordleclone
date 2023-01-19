
var characterCount = 0;
var wordArray = [];
var guessword = "chess";
var holdArray = [];


// TODO: only allow the event listener once the page has loaded.
// TODO: add a regex for only alpha characters

// *Listens for a key press
document.addEventListener("keydown", (e) =>{
	// *If the count is less than 6
	if(characterCount<6){
		// *Log the keycode and index of character
		console.log(e.key + "- " + characterCount);
		holdArray.push(e.key);
		characterCount=+1;
	}
	else if(x=6){
		if(holdArray.join("") == guessword){
			console.log("correct");
		}
		console.log(holdArray);
		wordArray.push(holdArray);
		holdArray = [];
		x=0;
	}
});
