// Assignment code here

//variables
var passwordLength= "";
var numbers ="0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()";
var usedCharacters = "";


//user input functions
function askUpperCase(){
  var ifUpperCaseTemp = confirm("Would you like to include uppercase letters?");
  
  if(ifUpperCaseTemp){
    var answer = "yes";
    usedCharacters = usedCharacters.concat(upperCase);
  }
}

function askLowerCase(){
  var ifLowerCaseTemp = confirm("Would you like to include lowercase letters?");

  if(ifLowerCaseTemp){
    usedCharacters = usedCharacters.concat(lowerCase);
  }
}

function askNumber(){
  var ifNumberTemp = confirm("Would you like to include numbers?");
 
  if(ifNumberTemp){
    usedCharacters = usedCharacters.concat(numbers);
  }
}

function askSpecial(){
  var ifSpecialTemp = confirm("Would you like to include special characters?");
  
  if(ifSpecialTemp){
    usedCharacters = usedCharacters.concat(specialChar);
  }
}

function askLength(){
  var answer = prompt("How long you would like the password to be?");
 
  if(answer === ""){
    alert("Sorry you must enter a password length");
    askLength();
  }else if (answer){
    var passwordLengthTemp = parseInt(answer);
    if(passwordLengthTemp < "8"){
      alert("Sorry, password must be at least 8 characters long.");
      askLength();
    }else if(passwordLengthTemp > "128"){
      alert("Sorry, password cannot be longer than 128 characters.");
      askLength()
    }else if(passwordLengthTemp === ""){
      alert("Sorry, you must select a length");
      askLength()
    }else{
      passwordLength = passwordLengthTemp;
    }
  }else{
    alert("Sorry you must enter a password length");
    askLength();
  }
}

function generatePassword(){
  askUpperCase();
  askLowerCase();
  askNumber();
  askSpecial();
  askLength();
  
  var generatedPassword= "";
  
  for(i=0; i <= passwordLength - 1; i++){
    var passwordItem = usedCharacters.charAt(Math.floor(Math.random() * usedCharacters.length));
     generatedPassword = generatedPassword.concat(passwordItem);
  }
 
  alert("Your randomly generated password is: " + generatedPassword);
  usedCharacters = "";
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


