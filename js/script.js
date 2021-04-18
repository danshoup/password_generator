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

// Create an empty array to concatenate array choice based on user input.
var choiceArray = [];
var randomPass = "";

  // Window prompt for user to choose password length; stored to variable
  var pwdLength = window.prompt("To generate a password: \n\nBegin by choosing a length between 8 and 128 characters.");
    
    // Alert for incorrect input and cancel function
    if (pwdLength < 8 || pwdLength > 128) {
      window.alert("\nYou did not input a valid length between 8 and 128 characters. \n\nYour password was not created. \n\nPlease try again."); 
      return;
      // Alert confirmation of input and continue password generation.
    } else if (pwdLength >= 8 || pwdLength <= 128) {
      window.alert("\nYou have entered a value of " + pwdLength + " for your password. \n\nClick 'OK' to continue.");
    }

  // Add confirmation box input for character types.
  var numbers = window.confirm("\nWould you like to include 'numbers' (0, 1, 2, etc.) in your password? \n\nIf yes, click 'OK'.");
  var lwrCase = window.confirm("\nWould you like to include 'lowercase' characters in your password? \n\nIf yes, click 'OK'.");
  var upCase = window.confirm("\nWould you like to include 'UPPERCASE' characters in your password? \n\nIf yes, click 'OK'.");
  var spChar = window.confirm("\nWould you like to include 'special characters' (such as: !@#$%) in your password? \n\nIf yes, click 'OK'.");

    // Alert if no character types were chosen and stop function.
    if (numbers !== true && lwrCase !== true && upCase !== true && spChar !== true){
      window.alert("\nYou must choose at least one character type. \n\nYour password was not created.");
      return;
    }


    // Action if any character type chosen.
    if (numbers === true || lwrCase === true || upCase === true || spChar === true){
      window.confirm("\nClick 'OK' to generate your password.");
    }

    // Push arrays together if variable chosen in confirm boxes.
    if (numbers === true){
      choiceArray.push(...numArr);
    }
    if (lwrCase === true){
      choiceArray.push(...lowerArr);  
    }
    if (upCase === true){
      choiceArray.push(...upperArr);
    }
    if (spChar === true){
      choiceArray.push(...specialArr);
    }



    var rando1 = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    console.log(rando1);




    console.log(choiceArray);
    console.log(choiceArray.toString());
    console.log(choiceArray.join(""));

    // Create random generated variable from the pushed arrays.
    for (var i = 0; i < pwdLength; i++); 
    

}

generatePassword();

