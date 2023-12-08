//funtion formatPhoneNumber its gonna take a value as parameter
//first using a regular expression we are gonna remove all non-numerics characters
//then we create a variable to get the length of the phone number
//then we are gonna evaluate the value if the value is not a value then will return to the parameter, 
//if this is not a number will send 
//an alert that says just enter numbers, then will check the length of the phone number
//if this is less than 4 its gonna return phoneNumber
//if this is less than 7 number its gonna format the number like : (xxx) xxxxxx (but its not gonna be allow later anyways in the form validation).
//all other numbers more than 7 are gonna be formatted like : (xxx)-xxx-xxxx.
function formatPhoneNumber(value) {
 
  let phoneNumber = value.replace(/[^\d]/g, "");
  let phoneNumberLength = phoneNumber.length;

  if (!value) return value;

  if (!value) {
    alert("You must enter just numbers");
    return false;
  }

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 9)}`;
}

// function format phone number that is gonna take the element by ID phone-Number
//everytime that an input is press down in the input box of phone-Number 
//the variable formatValue is gonna pass that value trough formatPhopneNumber method storing in itselft.
function phoneNumber() {
  let inputNumber = document.getElementById("phone-Number");
  let formatValue = formatPhoneNumber(inputNumber.value);
  inputNumber.value = formatValue;
}

//function fullName that is gonna help us with some conditional statements
// and an event that is gonna check when the users press key with the keyboard
//sending an alert when the user try to introduce numbers and just allowing introduce letters.
function fullNameEvent(event) {
  let letter = event.keyCode || event.which;

  if (
    (letter >= 65 && letter <= 90) ||
    (letter >= 97 && letter <= 122) ||
    letter === 8 ||
    letter === 32
  ) {
    return true;
  } else if (letter >= 48 && letter <= 57) {
    alert("You must enter only letters");
    return false;
  } else {
    return false;
  }
}

//function email format that use an event that is gonna help checking
//the condition when the users try to space in the smail input box
function emailFormat(event) {
  let letter = event.keyCode || event.which;

  if (letter === 32) {
    alert("You can not enter espace for emails");
    return false;
  } else {
    return true;
  }
}

//form Validation before "send it"
//listener event for submit the form and prevents the defaults action of it
//takes and reads the values of phoneNumber, fullName and email
//and checks the condition statements using these values
//if these conditions are true, it gonna change the warning variable message and change our flag to true
//if our flag is true sets our innerHTML of our element ID warnings with the value inside the variable warnings
//otherwise its gonna change the message to "Thank you we will be in touch as soon as possible" and reset the form.
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let phoneNumber = document.getElementById("phone-Number").value;
  let fullName = document.getElementById("full-Name").value;
  let email = document.getElementById("Email").value;
  let parag = document.getElementById("warnings");
  let warnings = "";
  let complete = false;
  let regEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  let regNum = "^d+$";
  parag.innerHTML = "";

  if (
    phoneNumber == "" ||
    phoneNumber.length < 13 ||
    phoneNumber.match(!regNum)
  ) {
    warnings += `You must enter a valid phone number <br>`;
    complete = true;
  }
  if (fullName == "" || fullName.length < 5) {
    warnings += `You must enter a valid name <br>`;
    complete = true;
  }
  if (email.length == "" || !email.match(regEmail)) {
    warnings += `You must enter a valid email <br>`;
    complete = true;
  }
  if (complete) {
    parag.innerHTML = warnings;
  } else {
    //reset the form and send and alert with the message of succesfull introduction of values
    
    
   //alert ("All the fields are correct! \nThank you we will be in touch as soon as possible!"); 
   form.submit();
  }
});

function redirect() {
  // Set the URL to the page you want to redirect to
  window.location.href = "index.html";
}
