// Assignment Code
//Create expression function (uses a variable to call the function) that when called, returns the button element in the html file with id="generate"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//=====================================================================================================================
//create funciton 'writePassword' that when called initiates the user to start creating their password
function writePassword() {
  //Create expression function (uses variable to call the function) that when called, concatenates the text of the array (password) that is made up of the values from the object passwordText.
  //var password = generatePassword();
  //Create expression function (uses variable to call the function) that when called, returns the textarea element in the html file with id="pasword"
  var passwordText = document.querySelector("#password");

  //Promt user for input critera for password
  //===================================================================================================================
  //Function that prompts user for a number greater than or equal to 8 and less than or equal to 128, and checks if criteria are met.
      function pwLen() {
      var userLen = prompt('How long would you like your password to be? Minimum required length is 8 and maximum is 128.');
      var userLen = parseInt(userLen);
      if (typeof userLen === 'number' && userLen >=8 && userLen <= 128) {
        console.log("its a good num");
      } else {
        alert("Please enter a whole number between 8 and 128 (inclusive).");
        pwLen();
      }
      }
    pwLen() 
  




  //Creates an array of the values that are within the object 'passwordText' and assigns them to the variable 'password'
  passwordText.value = password;

}

// Add event listener to generate button
//Attaches an event handler to the button id="generate". When the button is clicked, call the function writePassword.
generateBtn.addEventListener("click", writePassword);
