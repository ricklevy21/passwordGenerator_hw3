// Assignment Code
//Create query selector that targets the button element in the html file with id="generate".
var generateBtn = document.querySelector("#generate");
var newPassword = '';
// Write password to the #password input
//=====================================================================================================================
//Define funciton 'writePassword' that when called initiates the user to start creating their password
function writePassword() {
  //Define expression function (uses variable to call the function) that when invoked, concatenates the text of the array (password) that is made up of the values from the object passwordText.
  //var password = generatePassword();

  //create an empty array that will store the characters to be used in making the password
  var charArr = [];


  //Create expression function (uses variable to call the function) that when called, returns the textarea element in the html file with id="pasword"
  var passwordText = document.querySelector("#password");
  //call the pwLen function to begin sequence of asking user for criteria
  pwLen();
  //Promt user for input critera for password
  //===================================================================================================================
  //Function that prompts user for a number greater than or equal to 8 and less than or equal to 128, and checks if criteria are met.
      function pwLen() {
      //prompts user for password length
      var userLen = prompt('How long would you like your password to be? Minimum required length is 8 and maximum is 128.');
      //pareses user input as integer
      var userLen = parseInt(userLen);
      //conditional statement to check if user iput meets password length criteria
      if (typeof userLen === 'number' && userLen >=8 && userLen <= 128) {
        console.log("user supplied password length value is acceptable");
        charType();
      //function quits if user selects "cancel"
      } else if (!(userLen)){
        console.log("The user decided not to make a password.");
        return;
      } else {
        //Alert user imporper input, and remind of required criteria
        alert("Please enter a whole number between 8 and 128 (inclusive).");
        //re-invoke funciton so user can try again
        pwLen();
      }
    }


    
  //Function to let user decide which types of characters to include
    function charType() {
      //ask if user wants to include uppercase letters
      var includeUpper = confirm("Would you like to include uppercase letter characters?");
      //ask if user wants to include lowercase letters
      var includeLower = confirm("Would you like to include lowercase letter characters?");
      //ask if user wants to include numbers
      var includeNum = confirm("Would you like to include number characters?");
      //ask if user wants to include special characters
      var includeSpecial = confirm("Would you like to include special characters?");
      //define variable for character sets
      var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var lowerSet = "abcdefghijklmnopqrstuvwxyz";
      var numSet = "0123456789";
      var specialSet = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      


      //add selected characters to and array
      if (includeUpper) {
        charArr.push(upperSet);
      }
      if (includeLower) {
        charArr.push(lowerSet);
      }
      if (includeNum) {
        charArr.push(numSet);
      }
      if (includeSpecial) {
        charArr.push(specialSet);
      }
      if (charArr === undefined || charArr.length == 0) {
        alert("You must select at least one character type to include in your password");
        return;
      }
    }
    //merge all contents of character set array into a single string, without a separator
    var charSet = charArr.join('');
    console.log(charSet);
    generatePW();

  }


  //Return the value of passwordText and set it to password
  //passwordText.value = password;

// Add event listener to generate button
//Attaches an event handler to the button id="generate". When the button is clicked, invoke the function writePassword.
generateBtn.addEventListener("click", writePassword);
