// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLengthEL = document.querySelector("#passlength");
var isLower = document.getElementById("lower");
var isUpper = document.getElementById("upper");
var isNum = document.getElementById("number");
var isSpec = document.getElementById("special");
var passZoo = {
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],
  num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  spec: ["!",'"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
  };

function generatePassword(){

    var index = 0;
    var charIndex = 0;
    var passLength = passLengthEL.value;
    var password = "";

    console.log(passLength);

    if(passLength < 8 || passLength > 128) {
      alert("Password length must be bewteen 8-128 characters");
    }
    else if(!isLower.checked && !isUpper.checked && !isNum.checked && !isSpec.checked) {
      alert("Please tick atleast one box!");
    } 
    else {
      while(password.length < passLength) {
        index = Math.random();
      
        if(isLower.checked && index < 0.25) {
          charIndex = Math.round(Math.random() * 25);
          password += passZoo.lower[charIndex];
        }
        if(isUpper.checked && index >= 0.25 && index < 0.5) {
          charIndex = Math.round(Math.random() * 25);
          password += passZoo.upper[charIndex];
        }
        if(isNum.checked && index >= 0.5 && index < 0.75){
          charIndex = Math.round(Math.random() * 9);
          password += passZoo.num[charIndex];
        }
        if(isSpec.checked && index >= 0.75 && index < 1) {
          charIndex =  Math.round(Math.random() * 31)
          password += passZoo.spec[charIndex];
        }

      }
    }
    
    return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
