var lCase = false
var uCase = false
var nCase = false
var sCase = false

var letters = 'abcdefghijklmnopqrstuvwxyz'
var randlet = letters[Math.floor(Math.random() * letters.length)]
console.log(letters[Math.floor(Math.random() * letters.length)])

var capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var randcap = capLetters[Math.floor(Math.random() * capLetters.length)]
console.log(capLetters[Math.floor(Math.random() * capLetters.length)])

var ints = "1234567890"
var randint = ints[Math.floor(Math.random() * ints.length)]
console.log(ints[Math.floor(Math.random() * ints.length)])

var special = "!@#$%^&*()-=_+"
var randspc = special[Math.floor(Math.random() * special.length)]
console.log(special[Math.floor(Math.random() * special.length)])

var passCat = ["letters", "capLetters", "ints", "special"]

var passContent = []
var password = ""

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
// Wrap everything in a function or Return will break things.
function checkLength() {
    if ((passLength < 8) || (passLength > 128)) {
        window.alert("That password is out of bounds. Try again with an appropriate length.");
        console.log("Bad passLength " + passLength);
        return;
    }

    // Write kickback for if the user uses a non-number
    if (Number.isNaN(passLength)) {
        alert("This is not a number.")
        return null;
    }
}


// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
if (window.confirm("Should your password contain lower-case letters?")) {
    lCase = true;
    console.log("lCase:" + lCase);
    passContent.push("letters");
} else {
    console.log("lCase:" + lCase);
}

if (window.confirm("Should your password contain upper-case letters?")) {
    uCase = true;
    console.log("uCase:" + uCase);
    passContent.push("capLetters");
} else {
    console.log("uCase:" + uCase);
}

if (window.confirm("What about numbers? Does you password require those?")) {
    nCase = true;
    console.log("nCase:" + nCase);
    passContent.push("ints");
} else {
    console.log("nCase:" + nCase);
}

if (window.confirm("And special characters? Does you password require those?")) {
    sCase = true;
    console.log("sCase:" + sCase);
    passContent.push("special");
} else {
    console.log("sCase:" + sCase);
}



// console.log(passContent[0])
// var randchoice = passContent[Math.floor(Math.random() * passContent.length)];
// console.log(randchoice)

numGenerator()
function numGenerator() {
    for (var i = 0; i < passLength - passContent.length; i++) {

        var randchoice = passContent[Math.floor(Math.random() * passContent.length)];
    
        if (randchoice == "letters") {
            randlet = letters[Math.floor(Math.random() * letters.length)];
            password = password + randlet;
        }
        else if (randchoice == "capLetters") {
            randcap = capLetters[Math.floor(Math.random() * capLetters.length)];
            password = password + randcap;
        }
        else if (randchoice == "ints") {
            randint = ints[Math.floor(Math.random() * ints.length)];
            password = password + randint;
        }
        else {
            randspc = special[Math.floor(Math.random() * special.length)];
            password = password + randspc;
        }    
    }

    console.log(password)

//  generate frontBack and check for specific characters to add the last 1-4 digits.
    var frontBack = Math.floor(Math.random() * 2)

        // Check lCase
        if (lCase === true) {
            randlet = letters[Math.floor(Math.random() * letters.length)];
            frontBack = Math.floor(Math.random() * 2) + 1
            console.log(frontBack)
        
            if (frontBack == 1) {
                password = password + randlet;
            } 
            else {
                password = randlet + password;
            } 
        }
        else {
            lCase = false;
        }

        // Check uCase
        if (uCase === true) {
            randcap = capLetters[Math.floor(Math.random() * capLetters.length)];
            frontBack = Math.floor(Math.random() * 2) + 1

            if (frontBack == 1) {
                password = password + randcap;
            } 
            else {
                password = randcap + password;
            }
        } 
        else {
            uCase = false
        }
        
        // function addNCase() {
            if (nCase === true) {
                randint = ints[Math.floor(Math.random() * ints.length)];
                frontBack = Math.floor(Math.random() * 2) + 1
    
                if (frontBack == 1) {
                    password = password + randint;
                } 
                else {
                    password = randint + password;
                }
            } 
            else {
                nCase = false
            }

        // add sCase
        if (sCase === true) {
            randspc = special[Math.floor(Math.random() * special.length)];
            frontBack = Math.floor(Math.random() * 2) + 1
            if (frontBack == 1) {
                password = password + randspc;
            } 
            else {
                password = randspc + password;
            }
        } 
        else {
            sCase = false
        }
    }




// function addUCase() {
        // if (uCase = true) {
        //     randcap = capLetters[Math.floor(Math.random() * capLetters.length)];
        //     frontBack = Math.floor(Math.random() * 2) + 1

        //     if (frontBack == 1) {
        //         password = password + randcap;
        //     } 
        //     else {
        //         password = randcap + password;
        //     }
        // } else {
        //     uCase = false
        // }
    // }

 
    // }
    // function addSCase() {
        
    // }

    // addLCase()
    // addNCase()
    // addSCase()
    // addUCase()
    console.log(password)
// }

// YES! YES! YES!

// }
