// validator.js
//   An example of input validation using the change and submit 
//   events

// The event handler function for the name text box
function chkName() {
  var myName = document.getElementById("firstname");

// Test the format of the input name 
  var pos = myName.value.search(/^[A-Za-z]+$/);
//Accepts letters only any number of times 
if (myName.value == "") {
  swal("You did not enter any first name \n" +
        "Please enter one now");
  return false;
}
  if (pos != 0) {
    swal("The first name you entered (" + myName.value + 
          ") is not in the correct form. \n" +
          "The correct form consists only of letters without spaces. \n" +
          "Please go back and fix your first name");
    return false;
  } else
    return true;
}


function chkName2() {
  var myName = document.getElementById("lastname");

// Test the format of the input name 
  var pos = myName.value.search(/^[A-Za-z]+$/);
//Accepts letters only any number of times 
if (myName.value == "") {
  swal("You did not enter any last name \n" +
        "Please enter one now");
  return false;
}
  if (pos != 0) {
    swal("The last name you entered (" + myName.value + 
          ") is not in the correct form. \n" +
          "The correct form consists only of letters without spaces. \n" +
          "Please go back and fix your last name");
    return false;
  } else
    return true;
}

function chkEmail() {
  var myName = document.getElementById("Email");
// Test the format of the input name 
  var pos = myName.value.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
//Accepts letters integers and characters common in emails
if (myName.value == "") {
  swal("You did not enter any email address \n" +
        "Please enter one now");
  return false;
}
  if (pos != 0) {
    swal("The email you entered (" + myName.value + 
          ") is not in the correct form. \n" +
          "Please go back and fix your email");
    return false;
  } else
    return true;
}

// The event handler function for the phone number text box

function chkPhone() {
  var myPhone = document.getElementById("Contact");
// Test the format of the input phone number
  var pos = myPhone.value.search(/^\d{8}$/);
//Accepts 8 digits only 
if (myPhone.value == "") {
  swal("You did not enter any contact \n" +
        "Please enter one now");
  return false;
}
  if (pos != 0) {
    swal("The phone number you entered (" + myPhone.value +
          ") is not in the correct form. \n" +
          "The correct form consists of 8 digits \n" +
          "Please go back and fix your phone number");
    return false;
  } else
    return true;
}

function chkAdd() {
  var myName = document.getElementById("Address");

// Test the format of the input name 
  var pos = myName.value.search(/^[A-Za-z ,.()\d]+$/);
//Accepts letters, integers, .,() only any number of times  
if (myName.value == "") {
  swal("You did not enter any address \n" +
        "Please enter one now");
  return false;
}
  if (pos != 0) {
    swal("The address you entered (" + myName.value + 
          ") is not in the correct form. \n" +
          "The correct form consists of letters, digits, braces, commas, full stops and spaces. \n" +
          "Please go back and fix your address");
    return false;
  } else
    return true;
}


function chkPasswords() { 
  var init = document.getElementById("Password");
  var sec = document.getElementById("Password2");
  if (init.value == "") {
    swal("You did not enter a password \n" +
          "Please enter one now");
    return false;
  }
  if (init.value != sec.value) {
    swal("The two passwords you entered are not the same \n" +
          "Please re-enter both now");
    return false;
  } else
    return true;
}