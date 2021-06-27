# password_generator

## Project Description

  This project is a password generator .In this project a random password will be generated based on user input's.

The criteria that the password is able to meet are:

1. The password is between 8 - 128 characters long, AND

2. The password must have at least one of the following character types:
 *lowercase characters
 *uppercasse characters
 *special characters
 *numeric characters

 The application should validate user input and ensure that at least one of the character criteria is selected.
 
 Once all the prompt are answered and after clicking generate button, the user will able to see a generated password matching the criteria he/she selected.

 The application will not accept below 8 characters or above 128 characters and string.

 click on this link to see the page.

The landing page looks like below

 ![landing Page image](assets/images/landingPage.png)


  ## Technologies Used
  
  HTML
  CSS
  JavaScript

   ## Functionality used to achieve the acceptance criteria

  when the user hits the webpage,the window will pop-up to enter the length the password to be generated and  some criterias to generate.

 The collection for individual criteria is declared on the top of the script. The user input is stored in an variable and condition is used to check if the entered number is between 8 to 128 and also the user is selected atleast one criteria.

 If the condition pass, the global collection array will append only  the subset collection  which the user choose as the criteria to want to generate the password.

 Math. random will pick random characters from the global collection and append it to a string variable.

 When  the user clicks the generate button the string in which the password is appended wil be shown in the text area.

