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

 click on this [link] (https://sangeethanr.github.io/password-generator/Develop/index.html)) to see the page.

The landing page looks like below

 ![landing Page image](/Assets/images/landingPage.png)
 


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

## Installation
On GitHub, navigate to the main page of the repository.
  To clone the repository using HTTPS, under "Clone with HTTPS", click . To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click clipboard image . To clone a repository using GitHub CLI, click Use GitHub CLI, then click clipboard image .

  open Git Bash
  
  Change the current working directory to the location where you want the cloned directory.
  
  Type git clone, and then paste the SSH  you copied earlier.

$ git clone git@github.com:sangeethaNR/password-generator.git
Press Enter to create your local clone.

$ git clone git@github.com:sangeethaNR/password-generator.git
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.

 You installed the project to your local!!!
 
  Link to the deployed application https://github.com/sangeethaNR/password-generator
  
  Landing Page  https://sangeethanr.github.io/password-generator/Develop/index.html

  
  ## Credits
  github.com
  google.com
  w3Schools.com
  Scratch.mit.edu