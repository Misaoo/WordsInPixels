
function pixelGrid (length) {
	var node = null;
	for(var i=0; i<length; i++){
		node = document.createElement("DIV");
		node.classList.add("pixel-grid");   
		document.getElementById("frame").append(node);
	} 
}

//Keyboard flash animation.
function mapKeycodeToChar(keycode){
	var pressedChar = String.fromCharCode(keycode);
	var charactersOnKeyboard = document.getElementsByClassName("char");
	for(var i=0; i<charactersOnKeyboard.length; i++){
		if(charactersOnKeyboard[i].children[0].innerHTML.trim() == pressedChar){
			charactersOnKeyboard[i].style.backgroundColor = "silver";
			setTimeout(function () {
				charactersOnKeyboard[i].style.backgroundColor = "#A9A9A9";
		    }, 100);
			break;
		}
	}
}


function paintPixel(color, defaultColor, index, element){
		if(!defaultColor){
			element[index].className = "";
			element[index].className = "pixel-grid";
			element[index].classList.add(color);	
		}
		else {
			element[index].className = "";
			element[index].className = "pixel-grid";		
		}
}
//Pairs color with pressed char.
function mapColorToChar(char, index){
	var colors = document.getElementById("line").children;
	var elements = document.getElementById("frame").children;
	for(var i=0; i<colors.length; i++){
		if(colors[i].dataset.char !== undefined){
			if(colors[i].dataset.char.toLowerCase() === char.toLowerCase()){ //Color exists.
				//There's a color that matches the char.
				paintPixel(colors[i].dataset.color, false, index, elements);
				break;
			}
		}
		else{
			paintPixel("white", false, index, elements);
		}
	}

}
function updateColors(){
	var textareatext = document.getElementsByClassName("textinput")[0].value;
	for(var g=0; g<textareatext.length; g++){
		mapColorToChar(textareatext[g].toLowerCase(), g);
	}
}
function setLength(){
	var textareatext = document.getElementsByClassName("textinput")[0].value.length;
	var elements = document.getElementById("frame").children;
	for(var g=0; g<elements.length; g++){
		if(g < textareatext){

		}
		else{
			elements[g].className = "";
			elements[g].className = "pixel-grid";
		}
	}
}
document.getElementById("textfield").addEventListener('input', function(){
	mapKeycodeToChar();
	updateColors();
	setLength();
});