// Assignment code here

//variables
var passwordLength = "";
var ifUpperCase = "";
var ifLowerCase = "";
var ifNumber = "";
var ifSpecial = "";

//user input functions
function askUpperCase(){
  var ifUpperCaseTemp = confirm("Would you like to include uppercase letters?");
  
  if(ifUpperCaseTemp){
    var answer = "yes";
    console.log(answer +" uppercase");
  }else{
    var answer = "no";
    console.log(answer +" uppercase");
  }
}

function askLowerCase(){
  var ifLowerCaseTemp = confirm("Would you like to include lowercase letters?");
  
  if(ifLowerCaseTemp){
    var answer = "yes";
    console.log(answer +" lowercase");
  }else{
    var answer = "no";
    console.log(answer +" lowercase");
  }
}

function askNumber(){
  var ifNumberTemp = confirm("Would you like to include numbers?");
 
  if(ifNumberTemp){
    var answer = "yes";
    console.log(answer +" number");
  }else{
    var answer = "no";
    console.log(answer +" number");
  }
}

function askSpecial(){
  var ifSpecialTemp = confirm("Would you like to include special characters?");
  
  if(ifSpecialTemp){
    var answer = "yes";
    console.log(answer +" characters");
  }else{
    var answer = "no";
    console.log(answer +" characters");
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
      console.log(passwordLengthTemp);
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

  console.log(passwordLength);
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


