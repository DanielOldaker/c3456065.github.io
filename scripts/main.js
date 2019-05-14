var myImage = document.getElementById("mainpic");

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Java.png') {
		myImage.setAttribute ('src','images/Java2.png');
	} else {
		myImage.setAttribute ('src','images/Java.png');
	}
}

var myButton = document.getElementById("UserName");
var User = document.getElementById("NamePrompt");

function setUserName() {
	var UserEntry = prompt('Please Enter Your Name.');
	localStorage.setItem('name', UserEntry);
	User.textContent = 'Welcome ' + UserEntry;

}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var StoredName = localStorage.getItem('name');
	User.textContent = 'Welcome ' + StoredName
}

myButton.onclick = function() {
	setUserName();
}

var SwapButton = document.getElementById("Mode");
var myCSS = document.getElementById("SwapStyle");



	function ChangeMode() {
	var CSSrc = myCSS.getAttribute('href');
	if(CSSrc === 'styles/style.css') {
		myCSS.setAttribute ('href','styles/dark.css');
	} else {
		myCSS.setAttribute ('href','styles/style.css');
	}
}

	SwapButton.onclick = function() {
	ChangeMode();
}