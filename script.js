//variables that contain character sets available for use in passwrod generation
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerSet = "abcdefghijklmnopqrstuvwxyz";
var numSet = "0123456789";
var specialSet = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

//arrays that contain character sets available for use in password generation
var upperArr = upperSet.split("");
var lowerArr = lowerSet.split("");
var numberArr = numSet.split("");
var specialArr = specialSet.split("");

//check arrays have the correct characters included
console.log(upperArr);
console.log(lowerArr);
console.log(numberArr);
console.log(specialArr);

//create variables with (global scope) that represent the criteria selected by the user
var includeUpper;
var includeLower;
var includeNum;
var includeSpecial;
var userLen;

//create an object to store password length selected by user
var userInputOptions = {};

//create a variable that will contain the characters randomly selected, based upon the user's criteria
var newPassword = [];

//create a variable that will be equal to the password generated
var finalPassword;

//Target the button with the variable generateBtn. This allows me to later add an event listener to the button.
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


//function that is invoked when button is clicked. Calls cascade of scripts and writes password onto the document.
function writePassword() {
    
    getPasswordOptions();
    passwordText.textContent = finalPassword;
}

//Prompt user for password options
function getPasswordOptions()   {
    //prompts user for desired password length
    userLen = prompt('How long would you like your password to be? Minimum required length is 8 and maximum is 128.');
    //pareses user input as integer
    userLen = parseInt(userLen);
    //conditional statement to check if user iput meets password length criteria
    if (typeof userLen === 'number' && userLen >=8 && userLen <= 128) {
      console.log("user supplied password length value is acceptable");
    //function quits if user selects "cancel"
    } else if (!(userLen)){
      console.log("The user decided not to make a password.");
      return;
    } else {
      //Alert user imporper input, and remind of required criteria
      alert("Please enter a whole number between 8 and 128 (inclusive).");
      //re-invoke funciton so user can try again
      getPasswordOptions();
    }
    //ask if user wants to include uppercase letters
    includeUpper = confirm("Would you like to include uppercase letter characters?");
    //ask if user wants to include lowercase letters
    includeLower = confirm("Would you like to include lowercase letter characters?");
    //ask if user wants to include numbers
    includeNum = confirm("Would you like to include number characters?");
    //ask if user wants to include special characters
    includeSpecial = confirm("Would you like to include special characters?");
    //check if user selected no variables at all .End if no characters selected.
    if (!(includeUpper) && !(includeLower) && !(includeNum) && !(includeSpecial)) {
        console.log("The user chose not to include any characters.");
        //tell the user that they must select at least one character type
        alert("You failed to choose any of the eligible character sets");
        //exit the function
        return;
    } else {
        //Add user's selected length option to the object userInputOptions
        userInputOptions.passwordLength = userLen;
        //check that the user's selected length is successfully added to the object
        console.log("here is how many chars they want "+ userInputOptions.passwordLength);
        
        //if at least one character type has benn selected, call the function that generates a password using the user's input
        generatePassword();
    }

};




//Function for getting a random element from an array. Parameter x will allow for user selected array to be an argument. Used in for loops to grab characters from includeChars array.
function randomElement(x) {
    return x[Math.floor(Math.random()*x.length)];
};



//Function that generates password from user's input
function generatePassword() {
    //Array to store all possible characters to inclue in password (an array of arrays)
    var includeChars = [];

    //Array to include one of each of the chosen characters to ensure each will be used
    var guaranteedCharacters = [];

    //Conditional statements that adds characters from an array into array of possible characters for use, based on user input.
    if (includeSpecial) {
        //loop over array of special characters, adding each one into the ultimate set of characters that will be used to make the pw (includeChars)
        for (var i = 0; i < specialArr.length; i++) {
            includeChars.push(specialArr[i]);
        }
        //add one random character from user selected character set into the array of guaranteed characters.
        guaranteedCharacters.push(randomElement(specialArr));
        //check arrays
        console.log(includeChars);
        console.log(guaranteedCharacters);
    }
    if (includeNum) {
        //loop over array of number characters, adding each one into the ultimate set of characters that will be used to make the pw (includeChars)
        for (var i = 0; i < numberArr.length; i++) {
            includeChars.push(numberArr[i]);
        }
        //add one random character from user selected character set into the array of guaranteed characters.
        guaranteedCharacters.push(randomElement(numberArr));
        //check arrays
        console.log(includeChars);
        console.log(guaranteedCharacters);
    }
    if (includeLower) {
        //loop over array of lower case characters, adding each one into the ultimate set of characters that will be used to make the pw (includeChars)
        for (var i = 0; i < lowerArr.length; i++) {
            includeChars.push(lowerArr[i]);
        }
        //add one random character from user selected character set into the array of guaranteed characters.
        guaranteedCharacters.push(randomElement(lowerArr));
        //check arrays
        console.log(includeChars);
        console.log(guaranteedCharacters);
    }
    if (includeUpper) {
        //loop over array of upper case characters, adding each one into the ultimate set of characters that will be used to make the pw (includeChars)
        for (var i = 0; i < upperArr.length; i++) {
            includeChars.push(upperArr[i]);
        }
        //add one random character from user selected character set into the array of guaranteed characters.
        guaranteedCharacters.push(randomElement(upperArr));
        //check arrays
        console.log(includeChars);
        console.log(guaranteedCharacters);
    }
    //empty newPassword array. this must be included so that the user can generate password after password, without refreshing the page.
    newPassword = [];
    //Define a for loop that iterates i times (i= the length of the password the user selected reduced by the number of items there are in the guarenteedCharacters array). Then concat all the return values and the items from the guaranteedCharacters array.
    for (var i = 0; i < (userInputOptions.passwordLength - guaranteedCharacters.length); i++){
            console.log(randomElement(includeChars));
            newPassword.push(randomElement(includeChars))
    }
    console.log(newPassword);
    //add on the guarenteed characters
    newPassword = newPassword.concat(guaranteedCharacters);
    console.log(newPassword);
    //create a string from the array containing the characters to make a password
    finalPassword = newPassword.join('');
    console.log(finalPassword);
}

//Attaches an event handler to the button id="generate". When the button is clicked, invoke the function getPasswordOptions.
generateBtn.addEventListener("click", writePassword); 

