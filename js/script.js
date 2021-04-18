// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//make a function to generate the password

function generatePassword() {

// Create variable strings for breaking into arrays and creating random password.
var num = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "~!@#$%^&*()";

// Split variable strings into arrays for random password access.
var numArr = num.split("");
var lowerArr = lower.split("");
var upperArr = upper.split("");
var specialArr = special.split("");

console.log(num);
console.log(numArr);
console.log(lower);
console.log(lowerArr);
console.log(upper);
console.log(upperArr);
console.log(special);
console.log(specialArr);

// This array concatenates all of the imput array choices.
var pswdArray = numArr.concat(lowerArr, upperArr, specialArr);
console.log(pswdArray);

  //Window prompt for user to choose password length; stored to variable
  var pwdLength = window.prompt("To generate a password: \n\nBegin by choosing a length between 8 and 128 characters.");
  console.log(pwdLength);
    
    //Alert for incorrect input and cancel function
    if (pwdLength < 8 || pwdLength > 128) {
      window.alert("\nYou did not input a valid length between 8 and 128 characters. \n\nYour password was not created. \n\nPlease try again."); 
      console.log("invalid length");
      return;
      // Alert confirmation of input and continue password generation.
    } else if (pwdLength >= 8 || pwdLength <= 128) {
      window.alert("\nYou have entered a value of " + pwdLength + " for your password. \n\nClick 'OK' to continue.");
      console.log("valid password length");
    }

  // Add confirmation box input for character types.
  var numbers = window.confirm("\nWould you like to include 'numbers' (0, 1, 2, etc.) in your password? \n\nIf yes, click 'OK'.");
  console.log(numbers);
  var lwrCase = window.confirm("\nWould you like to include 'lowercase' characters in your password? \n\nIf yes, click 'OK'.");
  console.log(lwrCase)
  var upCase = window.confirm("\nWould you like to include 'UPPERCASE' characters in your password? \n\nIf yes, click 'OK'.");
  console.log(upCase);
  var spChar = window.confirm("\nWould you like to include 'special characters' (such as: !@#$%) in your password? \n\nIf yes, click 'OK'.");
  console.log(spChar);

  // alert if no character types were chosen and stop function
    if (numbers !== true && lwrCase !== true && upCase !== true && spChar !== true){
      window.alert("\nYou must choose at least one character type. \n\nYour password was not created.");
      console.log("no character types");
      return;
    }


  // action if any character type chosen
    if (numbers === true || lwrCase === true || upCase === true || spChar === true){
      window.confirm("\nClick 'OK' to generate your password.");
      console.log("character types chosen")
    }



}

generatePassword();

