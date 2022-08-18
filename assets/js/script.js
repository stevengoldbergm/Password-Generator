// Global Variables
var lCase = false
var uCase = false
var nCase = false
var sCase = false
var passLength = 0
var password = ""
var pwTypes = []

var letters = 'abcdefghijklmnopqrstuvwxyz'
console.log(letters[Math.floor(Math.random() * letters.length)])

var capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
console.log(capLetters[Math.floor(Math.random() * capLetters.length)])

var ints = "1234567890"
console.log(ints[Math.floor(Math.random() * ints.length)])

var special = "!@#$%^&*()-=_+"
console.log(special[Math.floor(Math.random() * special.length)])

var passContent = []
// ----------


// var passContent = {
//     letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
//     capLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
//     ints: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
//     special: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "<", ",", ">", ".", "?", "/"],
//     pwTypes: []
// }

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// This will be easier to do in HTML/CSS. Do it last.
// Center a flexbox in a main section of the body. Add a user form. Connext the button on the form to the script here.


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
window.alert("I'm glad to hear you're taking your security seriously. \n Let me ask you some additional questions. . .");


// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
passLength = window.prompt("How long should your new password be? Please choose a number between 8 and 128 characters.");
console.log("Chosen passLength: " + passLength);
if ((passLength < 8) || (passLength > 128)) {
    window.alert("That password is out of bounds. Try again with an appropriate length.");
    console.log("Bad passLength " + passLength);
}

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
if (window.confirm("Should your password contain lower-case letters?")) {
    lCase = true;
    console.log("lCase:" + lCase);
    passContent.pwTypes.push("letters");
}
if (window.confirm("Should your password contain upper-case letters?")) {
    uCase = true;
    console.log("uCase:" + uCase);
    passContent.pwTypes.push("capLetters");
}
if (window.confirm("What about numbers? Does you password require those?")) {
    nCase = true;
    console.log("nCase:" + nCase);
    passContent.pwTypes.push("ints");
}
if (window.confirm("And special characters? Does you password require those?")) {
    sCase = true;
    console.log("sCase:" + sCase);
    passContent.pwTypes.push("special");
}

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
if ((lCase === false) && (uCase === false) && (nCase === false) && (sCase === false)) {
    widow.alert ("Hey, your password can't be blank! Please try again, with actual characters this time!");
    console.log("User out of parameters");
} 

window.alert("OK, that should cover it! Let me just do some magic here, and. . .");

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// STEPS: Make a random string of lower-case letters. Then adjust that string to replace random characters with upper-case letters, then again with numbers and special characters. Run a variable.text check

// for (var i = 0 ; i < passLength ; i++) {
//     password = password + passContent.letters[(Math.floor(Math.random() * passContent.letters.length))];
// }
// console.log(password)
// console.log(passContent)
// console.log("pwtypes " + pwTypes[Math.floor(Math.random() * pwTypes.length)])

// var outerArray = pwTypes[Math.floor(Math.random() * pwTypes.length)]
// console.log(passContent.ints[Math.floor(Math.random() * passContent.outerArray.length)])

for (var i = 0 ; i < passLength -1 ; i++) {
    // var outerArray = (Math.floor(Math.random() * passContent.length))
    // var innerArray = (Math.floor(Math.random() * passContent[outerArray].length))
    
    password = password + passContent.pwTypes[Math.floor(Math.random() * passContent.pwTypes.length)];
}
console.log(password)

// if ()

// console.log(passContent)


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page