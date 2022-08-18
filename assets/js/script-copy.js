// Global Variables
var lCase = false
var uCase = false
var nCase = false
var sCase = false
var passLength = 0
var password = ""

// var passContent = [
//     letters: ["a", "b", "c",],
//     ints: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
//     special: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "<", ",", ">", ".", "?", "/"]
// ]
var passContent = [
    ["a", "b", "c",],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "<", ",", ">", ".", "?", "/"]
]

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
}
if (window.confirm("Should your password contain upper-case letters?")) {
    uCase = true;
    console.log("uCase:" + uCase);
}
if (window.confirm("What about numbers? Does you password require those?")) {
    nCase = true;
    console.log("nCase:" + nCase);
}
if (window.confirm("And special characters? Does you password require those?")) {
    sCase = true;
    console.log("sCase:" + sCase);
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
var outerArray = (Math.floor(Math.random() * passContent.length))
console.log("Outer Array Value:", outerArray)

var innerArray = (Math.floor(Math.random() * passContent[outerArray].length))
console.log("Inner Array Value:", innerArray)

console.log(outerArray, innerArray)

console.log(passContent[outerArray][innerArray])

for (var i = 0 ; i < passLength ; i++) {
    var outerArray = (Math.floor(Math.random() * passContent.length))
    var innerArray = (Math.floor(Math.random() * passContent[outerArray].length))
    password = password + passContent[outerArray][innerArray];
}
console.log(password)
// console.log(passContent)


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page