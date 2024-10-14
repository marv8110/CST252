/** INSTRUCTIONS  **/

//0. Start by making variables for every one of the inputs and the button

//1. Start by making an event handler for when you click the log in button. The event handler should do the following:
//-------Use a loop to check every required field. All required fields have a class of "required". If the field is empty, highlight it in red
//SKIP-------Use the isEmailValid function below to check the email address. If the email address isn't valid, highlight it in red.
//SKIP-------Use the isPhoneValid function below to check the phone number. If the phone number isn't valid, highlight it in red.
//-------Check if the "Password" and "Confirm password" fields match exactly. If they do not math, highlight both in red

//2. Finally: If the user puts in correct input and presses log in again, all of the red highlights should disappear.
//---------The easiest way to do this is to loop through all of the fields at the beginning of the event handler and get rid of any red highlights


/** TESTING YOUR CDOE */
//Do each step one at a time!!!!!
//To test your code, do the following:

//1. Press log in without filling out some required fields fields and make sure al the required fields turn red
//2. Fill out all the fields correctly and press log in - make sure all of the red highlights disappear
//3. Put in a bad email address like "Hi." Make sure it gets highlighted in red when you click Log in
//4. Put in a bad phone number like "Wazzup". Make sure the phone number field gets highlighted in red.





/* DO NOT MODIFY THIS CODE */
//Checks if email is valid (it has to have an @ sign, etc.)
//Parameter email: The email adressed to be checked
//Returns true if the email is valid, false otherwise
const isEmailValid = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )?.length > 0;
}

//Checks if a phone number is valid 
//--- it looks like (888) 888-8888
//Parameter phoneNumber: the phone number to be checked
//Returns true if the phone number is valid, false otherwise
const isPhoneValid = (phoneNumber) => {
  return String(phoneNumber)
    .toLowerCase()
    .match(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    )?.length > 0;
}


//TASK 1

//Declare variable too keep track of all HTML elements with the required class
let requiredFields = document.querySelectorAll(".required");

//Declare variable to keep track of the login button
let loginBtn = document.querySelector("#login");

//Add an event listener containing an if else statement within a for each funtion to make each required element turn red when the button is clicked
loginBtn.addEventListener('click', () => {
//For each required element what will happen?
    requiredFields.forEach((required) => {
        //If the element contains the required class turn it red or else leave it alone
            if (required.classList.contains('required')) {
                required.style.borderColor = 'red';
                required.style.borderStyle = 'thick';
            } else {
              required.style.borderStyle = 'revert';
            }

        })

})

//TASK 4

//Add an event listener so when the reuired elements are filled in then it will revert the style back to the original
loginBtn.addEventListener('click', () => {
//For each required field what will happen? 
  requiredFields.forEach((required) => {
     //If the value of the required div is anything besides a space then it will count as correct   
    if (required.value !== '') {
      required.style.borderStyle = 'revert';
      required.style.borderColor = 'revert';
    } else {
      required.style.borderColor = 'red';
      required.style.borderStyle = 'thick';
    }

})
})

//TASK 3
//declare variables that keep track of the password and confirm elements
let passwordValue = document.querySelector("#password");
let confirmPasswordValue = document.querySelector("#confirmPassword");

//Add event listener with an if else statement for making the password boxes red if they don't match or regular if they do
loginBtn.addEventListener('click', () => {
  

//   AI assitance -> if (passwordValue.value && confirmPasswordValue.value && passwordValue.value === confirmPasswordValue.value) {
//     passwordValue.style.borderColor = 'revert';
//     passwordValue.style.borderStyle = 'revert';
//     confirmPasswordValue.style.borderColor = 'revert';
//     confirmPasswordValue.style.borderStyle = 'revert';
//   } else {
//     passwordValue.style.borderColor = 'red';
//     passwordValue.style.borderStyle = 'thick';
//     confirmPasswordValue.style.borderColor = 'red';
//     confirmPasswordValue.style.borderStyle = 'thick';
//   }
// })

//Set parameter to have password and confirm alement values equal to each other, and if they do then revert to original style or else turn border style red
//Add an additional parameter alement of setting one of the password element values to not equal a space. this makes it so it doesnt count them both being blank as equal to each other
if (passwordValue.value === confirmPasswordValue.value && passwordValue.value !== "") {
       passwordValue.style.borderColor = 'revert';
       passwordValue.style.borderStyle = 'revert';
       confirmPasswordValue.style.borderColor = 'revert';
       confirmPasswordValue.style.borderStyle = 'revert';
     } else {
       passwordValue.style.borderColor = 'red';
       passwordValue.style.borderStyle = 'thick';
       confirmPasswordValue.style.borderColor = 'red';
       confirmPasswordValue.style.borderStyle = 'thick';
     }
   })

//TASK 2
//Used Claude AI for assistence: Lines 141
//Declare variable to keep track of the email element
let emailValue = document.querySelector("#email");

//Add an event listener with an if else statment to toggle true or false for the isEmailValid function.
loginBtn.addEventListener('click', () => {

  //Set the parameter so that if the isEmailValid function is not true and it is checking the emailValue variable value then make it red, or else leave it unchanged.
  if (!isEmailValid(emailValue.value)) {
    emailValue.style.borderColor = 'red';
    emailValue.style.borderStyle = 'thick';
  } else {
    emailValue.style.borderColor = 'revert';
    emailValue.style.borderStyle = 'revert';
  }
});

//TASK 2 pt2
//Declare variable to keep track of the phone number element
let phoneValue = document.querySelector("#phoneNumber");

//Add an event listener with an if else statment to toggle true or false for the isPhoneValid function.
loginBtn.addEventListener('click', () => {

//Opposite version of the if else statment for the email element
//set the if else function so that if the isPhoneValid is true for the phone variable's value OR the value of the phone element is equal to a space then it will make the border regular, but if not then it will change the border to red
if (isPhoneValid(phoneValue.value) || phoneValue.value === '' ) {
  phoneValue.style.borderStyle = 'revert';
  phoneValue.style.borderColor = 'revert';
    } else {
  phoneValue.style.borderColor = 'red';
  phoneValue.style.borderStyle = 'thick';
    }
})
