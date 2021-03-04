function validateForm(){
    var x = document.forms["myForm"] ["name"].value;
    if(x==""){
        alert("Name must be filled out");
        return false;
    }
}
function validateForm(){
    var y = document.forms["myForm"] ["email-address"].value;
    if(y==""){
        alert("Email address required");
        return false;
    }
}
function activateForm(){
    var z = document.forms["myForm"].submit()

}
function myfunction(){
    alert("We have received your message.Thankyou for reaching out to us.")
}