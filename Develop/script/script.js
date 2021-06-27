// Assignment Code

var uppercase_collection ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var lowercase_collection = 'abcdefghijklmnopqrstuvwxyz';

var number_collection = '0123456789';

var spl_collection = '@#$%^&*(!-_/.+;:,)=<>?][{}';

//store user input to a vaiable

var pass_length =window.prompt("choose your length of the password, atleast 8 characters");

// function to check valid input from user
recurse();

function recurse(){
  //check if password is  a number or not
if(isNaN(pass_length)){
  window.alert("Input should be a number between 8 to 128");
  pass_length =window.prompt("choose your length of the password, atleast 8 characters");
  recurse();
}
//check if password length between 8 and less than 128

   if (pass_length < 8 || pass_length >128 )
{
  window.alert("Please enter a valid number");
  pass_length =window.prompt("choose your length of the password, atleast 8 characters");
  recurse();
}

}
//storing user inputs for generating password

 var uppercase_letter = window.confirm("Do your password should contain uppercase letter");
var lowercase_letter = window.confirm("Do your password should contain lowercase letter");
var special_char= window.confirm("Do your password should contain special character");
var numb = window.confirm("Do your password should contain numbers");
var generateBtn = document.querySelector("#generate");

var append_string='';

// check if the user has selected the particular combination

if(uppercase_letter)
{
  append_string = uppercase_collection;
}
if(lowercase_letter){
  append_string +=lowercase_collection;
}
if(special_char)
{
  append_string +=spl_collection;
}
if(numb){
  append_string += number_collection;
}
if(append_string === ""){
  window.alert("You need to select atleast one criteria to generate a password");
 location.reload();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword()
{
 
  var pass_string='';
    for(var i=0 ;i<pass_length ; i++)
    {
      var rnum = Math.floor(Math.random()* append_string.length);
      pass_string += append_string.substring(rnum,rnum+1);
    }
    return pass_string;
}


