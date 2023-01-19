var x = 0;

document.addEventListener("keydown", (e) =>{

	console.log(e.key);
	x=x+1;
	if(x<5){
		alert(e.key + " " + x);
	}
})