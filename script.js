// Assignment Code
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var length = PasswordLength();
  var charTypes = CharacterTypes();
  var password = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password = availableChars[randomIndex];
  }

  return password;
}
function PasswordLength() {
  var length = parseInt(prompt("Enter the lenght of password"));
  return length;
}
function CharacterTypes() {
  var charTypes = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: '!@#$%^&*()_+~`|}{[]:;?><,./-='
  };
  return selectedTypes.map(function (type) {
    return charTypes[type];
  });
}