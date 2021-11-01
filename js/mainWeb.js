function validation(){
var firstname= document.getElementById('firstname').value;
var lastname= document.getElementById('lastname').value;
var email= document.getElementById('email').value;
var contact= document.getElementById('contact').value;
var password= document.getElementById('password').value;
var cpassword= document.getElementById('cpassword').value;


var firstnamecheck = /^[A-Za-z]{3,30}$/;
var lastnamecheck = /^[A-Za-z]{3,30}$/;
var emailcheck = /^[A-Za-z0-9_]{3,}[@]{1}[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
var contactcheck = /^[6789][0-9]{9}$/;
var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-0!@#$%^&*]{8,16}$/;

if(firstnamecheck.test(firstname)){
document.getElementById('firstnameerror').innerHTML=" ";
}
else{
document.getElementById('firstnameerror').innerHTML="Invalid firstname";
return false;
}

if(lastnamecheck.test(lastname)){
document.getElementById('lastnameerror').innerHTML=" ";
}
else{
document.getElementById('lastnameerror').innerHTML="Invalid lastname";
return false;
}

if(emailcheck.test(email)){
document.getElementById('emailerror').innerHTML=" ";
}
else{
document.getElementById('emailerror').innerHTML="Invalid email";
return false;
}
if(contactcheck.test(contact)){
document.getElementById('contacterror').innerHTML=" ";
}
else{
document.getElementById('contacterror').innerHTML="Invalid contact";
return false;
}

if(passwordcheck.test(password)){
document.getElementById('passworderror').innerHTML=" ";
}
else{
document.getElementById('passworderror').innerHTML="Invalid password";
return false;
}

if(password.match(cpassword)){
document.getElementById('cpassworderror').innerHTML=" ";
}
else{
document.getElementById('cpassworderror').innerHTML="Doesn't match";
return false;
}

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxl3EAIB8ugfmianpe1pOGOlgT36St64uts4aNy04ZFWC0LXXWCTsJxr0e8lNcgE07R/exec'
            const form = document.forms['register-google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })
