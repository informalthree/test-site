let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/bang-dream.jpg'){
		myImage.setAttribute ('src', 'images/garupa-pico.png');
	} else {
		myImage.setAttribute ('src', 'images/bang-dream.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'BanG Dream is awesome, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Bang Dream is awesome, ' + storedName + '!';
}

myButton.onclick = function() {
	setUserName();
}