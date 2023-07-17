// Assignment code here


function askUpperCase(){
  var ifUpperCase = confirm("Would you like to include uppercase letters?");
  
  if(ifUpperCase){
    var answer = "yes";
    console.log(answer +" uppercase");
  }else{
    var answer = "no";
    console.log(answer +" uppercase");
  }
}

function askLowerCase(){
  var ifLowerCase = confirm("Would you like to include lowercase letters?");
  
  if(ifLowerCase){
    var answer = "yes";
    console.log(answer +" lowercase");
  }else{
    var answer = "no";
    console.log(answer +" lowercase");
  }
}

function askNumber(){
  var ifNumber = confirm("Would you like to include numbers?");
 
  if(ifNumber){
    var answer = "yes";
    console.log(answer +" number");
  }else{
    var answer = "no";
    console.log(answer +" number");
  }
}

function askSpecial(){
  var ifSpecial = confirm("Would you like to include special characters?");
  
  if(ifSpecial){
    var answer = "yes";
    console.log(answer +" characters");
  }else{
    var answer = "no";
    console.log(answer +" characters");
  }
}

function askLength(){
  var passwordLength = prompt("How long you would like the password to be?");
  var answer = parseInt(passwordLength);

  if(answer < "8"){
    alert("Sorry, password must be at least 8 characters long.");
    askLength();
  }else if(answer > "128"){
    alert("Sorry, password cannot be longer than 128 characters.");
    askLength()
  }else{
    console.log(answer);
  }
}

function generatePassword(){
  askUpperCase();
  askLowerCase();
  askNumber();
  askSpecial();
  askLength();
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


