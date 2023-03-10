// validatorTest.js
//   Register the event handlers for validator.html

document.getElementById("firstname").onchange = chkName;
document.getElementById("lastname").onchange = chkName2;
document.getElementById("Email").onchange = chkEmail;
document.getElementById("Contact").onchange = chkPhone;
document.getElementById("Address").onchange = chkAdd;
document.getElementById("Password2").onblur = chkPasswords; 
document.getElementById("form").onsubmit = chkPasswords;
