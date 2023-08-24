// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//Here write a function to generate random characters from the user's selected/preferred character set.
function getRandomChar(charSet) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet[randomIndex];
}

//Here write code to generate the password.
function generatePassword() {
  var password = "";
  var charSet = "";

//Here ask the user which character types they'd like to employ.

var useLc = prompt("Include lowercase letters?: yes/no (case sensitive)") === "yes";
var useUc = prompt("Include uppercase letters?: yes/no (case sensitive)") === "yes";
var useSpec = prompt("Include numerical characters?: yes/no (case sensitive)") === "yes";
var useNum = prompt("Include special characters?: yes/no (case sensitive)") === "yes";

if (useLc) {
  charSet += "abcdefghijklmnopqrstuvwxyz";
}
if (useUc) {
  charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (useNum) {
  charSet += "0123456789";
}
if (useSpec) {
  charSet += "!@#$%^&*()-_+=<>?";
}


//Here ask the user for their desired password length.
var passwordLengthInput = prompt("Enter desired password length (between 8 and 128):");

//validate the password length and ensure its applicable.
 var passwordLength = passwordLengthInput - 0;

 // actually generate the password.
for (var i = 0; i < passwordLength; i++) {
  password += getRandomChar(charSet);
}

return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
