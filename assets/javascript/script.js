// Assignment code here

var test = "";

function askUpperCase(){
  var ifUpperCase = confirm("Would you like to include uppercase letters?");
  if(ifUpperCase){
    test = "yes";
    console.log(test +" uppercase");
  }else{
    test = "no";
    console.log(test +" uppercase");
  }
}

function askLowerCase(){
  var ifLowerCase = confirm("Would you like to include lowercase letters?");
  if(ifLowerCase){
    test = "yes";
    console.log(test +" lowercase");
  }else{
    test = "no";
    console.log(test +" lowercase");
  }
}

function askNumber(){
  var ifNumber = confirm("Would you like to include numbers?");
  if(ifNumber){
    test = "yes";
    console.log(test +" number");
  }else{
    test = "no";
    console.log(test +" number");
  }
}

function askSpecial(){
  var ifSpecial = confirm("Would you like to include special characters?");
  if(ifSpecial){
    test = "yes";
    console.log(test +" characters");
  }else{
    test = "no";
    console.log(test +" characters");
  }
}


function generatePassword(){
  askUpperCase();
  askLowerCase();
  askNumber();
  askSpecial();
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


