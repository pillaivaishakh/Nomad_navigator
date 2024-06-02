let usrPass=document.getElementById("password");
let usrEmail=document.getElementById("email");
let button=document.getElementById("btn");
let registerForm=document.getElementById("registerForm");


let InvalidPass=document.getElementById("invalidPass");


function validateEmail(email) {
    // Regular expression pattern for email validation
    if(email.trim()==" "){
        return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the pattern
    return emailPattern.test(email);
}

function validatePassword(password) {
    // Regular expression pattern for password validation

    if(password.trim()==" "){
        return false;
    }

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~\-={}[\]:;"'<>,.?/\\]).{8,}$/;
    
    // Test the password against the pattern
    return passwordPattern.test(password);
}

registerForm.addEventListener("submit", function(event) {
    // event.preventDefault(); // Prevent default form submission behavior

    if (validatePassword(usrPass.value)) {
        console.log("Password is valid.");
        InvalidPass.innerHTML = "";
    } else {
        console.log("Password is invalid.");
        InvalidPass.style.color = "red";
        InvalidPass.style.fontSize = "12px";
        InvalidPass.style.maxWidth = "30vw";
        InvalidPass.innerHTML = `* At least 8 characters long ,
        Contains at least one digit, 
        Contains at least one lowercase letter, 
        Contains at least one uppercase letter,
        Contains at least one special character`;
    }

    if (validateEmail(usrEmail.value)) {
        console.log("Email is valid.");
        InvalidEmail.innerHTML = "";
    } else {
        console.log("Email is invalid.");
        InvalidEmail.style.color = "red";
        InvalidEmail.style.fontSize = "15px";
        InvalidEmail.innerHTML = "* Please enter a valid email address";
    }
});
