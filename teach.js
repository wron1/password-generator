// Assignment Code

var caseUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var caseLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caseNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var caseSpecial = '!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~'.split('');

var generateBtn = document.querySelector("#generate");

var optionsChosenNumber = 0;

var finalPasswordArray = [];
var finalPassword = [];
var splicedArray = []

// Single random variable from each array
var randomUpper = caseUpper[Math.floor(Math.random() * caseUpper.length)]
var randomLower = caseLower[Math.floor(Math.random() * caseLower.length)]
var randomNumeric = caseNumeric[Math.floor(Math.random() * caseNumeric.length)]
var randomSpecial = caseSpecial[Math.floor(Math.random() * caseSpecial.length)]


// Write password to the #password input
function writePassword() {

    var passwordLength = window.prompt("Enter how long your password should be. Chose between 8 and 128 characters.")

    // Check to see what the password length is and if it is in the required number length
    if((passwordLength == null || passwordLength === "")||(Number(passwordLength) < 8) || (Number(passwordLength) > 128)||(isNaN(Number(passwordLength)))){

        window.alert("Please try again and this time follow the instructions correctly")
        writePassword();

    }

    console.log("Your password will be "+ passwordLength +" digits long");

    // Confirm windows to get user input
    var lowercase = window.confirm("Would you like to include lowercase letters?");
    var uppercase = window.confirm("Would you like to include uppercase letters?");
    var numeric = window.confirm("Would you like to include numeric values?");
    var specialChar = window.confirm("Would you like to include special characters?");

    //lowercase, uppercase, numeric, and/or special characters are chosen
    if(lowercase){

        // Repeated throughout
        // Takes a random element from the array and makes sure it exists in the final passwords amongst the randomness
        finalPasswordArray = finalPasswordArray.concat(caseLower);
        finalPassword.push(randomLower);
        optionsChosenNumber++

    }

    if(uppercase){

        finalPasswordArray = finalPasswordArray.concat(caseUpper);
        finalPassword.push(randomUpper);
        optionsChosenNumber++

    }

    if(numeric){

        finalPasswordArray = finalPasswordArray.concat(caseNumeric);
        finalPassword.push(randomNumeric);
        optionsChosenNumber++

    }


    if(specialChar){

        finalPasswordArray = finalPasswordArray.concat(caseSpecial);
        finalPassword.push(randomSpecial);
        optionsChosenNumber++

    }

    if(!lowercase && !uppercase && !numeric && !specialChar){

        window.alert("You need to chose atleast one criteria for a password to exist");
        writePassword();

    }

    window.alert("Now generating password")

    // Get the final array length
    var finalArrayLength = passwordLength - optionsChosenNumber;

    // Takes an array of all the chosen elements and randomizes it
    finalPasswordArray = finalPasswordArray.sort(() => 0.5 - Math.random());

    // Takes that array of randomized elements and shortens it to the length chosen
    splicedArray = finalPasswordArray.slice(0, finalArrayLength);

    // Adds the shortened randomized array onto the final password which already contains the 1-4 random elements
    finalPassword = finalPassword.concat(splicedArray);

    console.log("This is the spliced array "+splicedArray);
    console.log("This is the number of options chosen "+optionsChosenNumber);
    console.log("This is the final password without concatanation "+finalPassword);

    // Check to see if the actual array length is the same as the desired lenght and if not fix it
    if(finalPassword.length !== finalArrayLength){

        // This is taking into account the smallest subdivision
        // Largest length is 128 and the smallest array holds 10
        
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);
        finalPassword = finalPassword.concat(finalPassword);

        finalPassword = finalPassword.slice(0, finalArrayLength + optionsChosenNumber);

        console.log(finalPassword);

    }

    // Retrieves the password box
    var passwordText = document.querySelector("#password");

    // Sets the password box value equal to the password and removes the commas in the array
    passwordText.value = finalPassword.join("");

    // Reset values for the next password to be generated
    finalPasswordArray = [];
    finalPassword = [];
    splicedArray = []
    optionsChosenNumber = 0;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
