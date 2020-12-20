function validateInput(){

    if(validateEmail() || validatePhone()){
        window.location.href = "FormPage.html";
    }
}
function validateEmail(){
    var errorDiv = document.getElementById("errorDiv");
    var emailInput = document.getElementById("email-txtbox");
    try {
        if (emailInput.value.search("@") === -1 || emailInput.value.lastIndexOf(".") === -1) {
            throw "Please provide a valid email address or phone number"
        }
        emailInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        return true;

    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        emailInput.style.background = "rgb(255,233,233)";
    }
}
function validatePhone() {
    var inputtxt = document.getElementById("email-txtbox");
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    if(inputtxt.value.match(phoneno)) {
        
        return true;
      }
      else {
        throw "Please provide a valid email address or phone number";
        return false;
      }
    }


function createEventListener(){
    var submitBtn = document.getElementById("email-submit-btn");
    if(submitBtn.addEventListener){
        submitBtn.addEventListener("click", validateInput, false );
    } else if(submitBtn.attachEvent){
        submitBtn.attachEvent("onclick", validateInput)
    } 
}

function setUpPages(){
    createEventListener();
}

if(window.addEventListener){
    window.addEventListener("load", setUpPages, false)
} else if(window.attachEvent){
    window.attachEvent("onload", setUpPages)
}


