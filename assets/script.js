// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    console.log("\\");
    var index = 0;
    var charIndex = 0;
    var passLength = 0;
    var password = "";
    var passZoo = {
      lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],
      num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      spec: ["!",'"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
      };

    while(passLength < 8 || passLength > 124) {
      var x = prompt("What length would you like the password to be?");
      passLength = parseInt(x);
      if (passLength < 8 || passLength > 124) {
        alert("Pass word length must be bewteen 8-124 characters");
      }
    }

    var isLower = confirm("Do you want to include lowercase letters (a, b, c)?");
    var isUpper = confirm("Do you want to include uppercase letters (A, B, C)?");
    var isNum = confirm("Do you want to include numbers (1, 2, 3)?");
    var isSpec = confirm("Do you want to include special characters ($, @, &)?");
    


    while(password.length !== passLength) {
      index = Math.random();

      if(isLower && index < 0.25) {
        charIndex = Math.round(Math.random() * 26);
        password += passZoo.lower[charIndex];
        console.log(charIndex)
        console.log(password)
      }
      if(isUpper && index >= 0.25 && index < 0.5) {
        charIndex = Math.round(Math.random() * 26);
        password += passZoo.upper[charIndex];
        console.log(charIndex)
        console.log(password)
      }
      if(isNum && index >= 0.5 && index < 0.75){
        charIndex = Math.round(Math.random() * 10);
        password += passZoo.num[charIndex];
        console.log(charIndex)
        console.log(password)
      }
      if(isSpec && index >= 0.75 && index < 1) {
        charIndex =  Math.round(Math.random() * 32)
        password += passZoo.spec[charIndex];
        console.log(charIndex)
        console.log(password)

      }

    }
    
    return password;





  //USER will choose medium, strong, extra strong
  //USER will choose the length of the password
  //USER prompt for the character types to include lowercase, uppercase, numeric, and/or special characters 
  //Use math.random to generate random characters whether it be punctuation, integer or letter
  //generate an int value between 1 & 3 to choose the number of random cpunctuation characters
  // minus the out most punctuation by the smallest one to decide which characters will be chosen 
  // generate random letters uppercase and lower case.
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
