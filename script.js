// Assignment Code
var generateBtn = document.querySelector("#generate");

//lowercase, uppercase, numeric, and/or special characters

// Write password to the #password input
function writePassword() {

  var caseUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var caseLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var caseNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var caseSpecial =  	'!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~'.split('');

  var finalPasswordArray = [""];

  var tryAgain

  passwordLength = window.prompt("Enter how long your password should be. Chose between 8 and 128 characters.")

  // Check to see what the password length is and if it is in the required number length
  if(passwordLength == null || passwordLength === ""){

    tryAgain = window.confirm("Please enter something in the prompt.")

    // Handle the exiting/restarting of the program
    if(tryAgain === false){

      console.log("ending program");
      return;

    }else{

      console.log("restarting");
      writePassword();

    }

  }else if((Number(passwordLength) < 8) || (Number(passwordLength) > 128)){

    tryAgain = window.confirm("Pick a number between 8 and 128. Try again?");

    // Handle the exiting/restarting of the program
    if(tryAgain === false){

      console.log("ending program");
      return;

    }else{

      console.log("restarting");
      writePassword();

    }

  }else if((isNaN(Number(passwordLength)))){

    tryAgain = window.confirm("Please chose a number this time. Try again?")

    // Handle the exiting/restarting of the program
    if(tryAgain === false){

      console.log("ending program");
      return;

    }else{

      console.log("restarting");
      writePassword();

    }

  }else{

    console.log("Your password will be "+ passwordLength +" digits long");
    lowercase = window.confirm("Would you like to include lowercase letters?");

  }



  // Checking all the cases to check which characters/letter types should be included in the password
  switch(lowercase){

    case true:

      console.log("You are including Lowercase letters");

      uppercase = window.confirm("Would you like to include uppercase letters?");

      finalPasswordArray = finalPasswordArray.concat(caseLower);

      break;

    case false:

      console.log("You are excluding Lowercase letters");

      uppercase = window.confirm("Would you like to include uppercase letters?");

      break; 

  }

  switch(uppercase){

    case true:

      console.log("You are including uppercase letters");

      numeric = window.confirm("Would you like to include numeric values?");

      finalPasswordArray = finalPasswordArray.concat(caseUpper);

      break;

    case false:

      console.log("You are excluding uppercase letters");

      numeric = window.confirm("Would you like to include numeric values?");

      break; 

  }

  switch(numeric){

    case true:

    console.log("You are including numeric values");

    specialChar = window.confirm("Would you like to include special characters?");

    finalPasswordArray = finalPasswordArray.concat(caseNumeric);

      break;

    case false:

      console.log("You are excluding numeric values");

      specialChar = window.confirm("Would you like to include special characters?");

      break; 

  }

  switch(specialChar){

    case true:

      console.log("You are including special characters");

      finalPasswordArray = finalPasswordArray.concat(caseSpecial);

      console.log("You finished bum")
      window.alert("Now generating password")

      break;

    case false:

      console.log("You are excluding special characters");

      console.log("You finished bum")
      window.alert("Now generating password")

      break; 

  }

  // Handle all of the password magic

  finalPasswordArray = finalPasswordArray.sort(() => 0.5 - Math.random());

  let finalPassword = finalPasswordArray.slice(0, passwordLength);

  console.log(finalPassword);

  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
