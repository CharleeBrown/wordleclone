
var characterCount = 0;
var wordArray = [];
var guessword = "chess";
var holdArray = [];
var inputs = document.getElementById("words");;
var charRegex = new RegExp(/^[A-Z]+$/i);

// TODO: only allow the event listener once the page has loaded.
// TODO: add a regex for only alpha characters
inputs.value="";
// *Listens for a key press
document.addEventListener("keydown", (e) =>{
	// *If the count is < 5
	if(e.key.match(/^[a-zA-Z]$/)){
		if(characterCount<5){
		// *Log the keycode and index of character
		console.log(e.key + "- " + characterCount);
		inputs.value += e.key;
		holdArray.push(e.key);
		characterCount+=1;
	}
	else if(characterCount=5){
		if(holdArray.join("") == guessword){
			alert("correct");
		}
		inputs.value = inputs.value + "\n";
		console.log(holdArray);
		wordArray.push(holdArray);
		holdArray = [];
		characterCount=0;
	}
}
else if(e.key =="Backspace" && characterCount < 5){
	characterCount-=1;
	inputs.value = inputs.value.substring(0, inputs.value.length - 1);
	holdArray.pop();
}
else{
	e.preventDefault();
}
});


