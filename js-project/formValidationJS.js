function valid_name(info)
{
    var name_length=info.value.length;
    if(name_length==0){
        info.style.borderColor="rgb(235, 52, 52)";
        document.getElementById("name_error_message").style.display="block";
        return false;
    }
    else if(name_length>=101){
        info.style.borderColor="rgb(235, 52, 52)";
        document.getElementById("name_error_message1").style.display="block";
        return false;
    }
    else{
        info.style.borderColor="transparent";
        document.getElementById("name_error_message1").style.display="none";
        document.getElementById("name_error_message").style.display="none";
        return true;
    }
}

function valid_email(info)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(info.value.match(mailformat))
    {
        info.style.borderColor="transparent";
        document.getElementById("email_error_message").style.display="none";
        return true;
    }
    else
    {
        info.style.borderColor="rgb(235, 52, 52)";
        document.getElementById("email_error_message").style.display="block";
        return false;
    }
}

function valid_phone(info)
{
    var phoneno0 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phoneno1 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var phoneno2 = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(info.value.match(phoneno0)||info.value.match(phoneno1)||info.value.match(phoneno2)){
      info.style.borderColor="transparent";
      document.getElementById("phone_error_message").style.display="none";
      return true;
    }
    else{
        info.style.borderColor="rgb(235, 52, 52)";
        document.getElementById("phone_error_message").style.display="block";
        return false;
    }
}

function valid_message(info)
{
    var name_length=info.value.length;
    if(name_length==0){
      info.style.borderColor="rgb(235, 52, 52)";
      document.getElementById("message_error_message").style.display="block";
      return false;
    }
    else if(name_length>=1001){
      info.style.borderColor="rgb(235, 52, 52)";
      document.getElementById("message_error_message1").style.display="block";
      return false;
    }
    else{
      info.style.borderColor="transparent";
      document.getElementById("message_error_message1").style.display="none";
      document.getElementById("message_error_message").style.display="none";
      return true;
    }
}

function submitButton(){
    if(valid_name(document.contactForm.userName)&&valid_email(document.contactForm.userEmail)&&valid_phone(document.contactForm.userPhone)&&valid_message(document.contactForm.userMessage)){
        document.getElementById("contactForm").action ="https://script.google.com/macros/s/AKfycbwLZbDhqZ9eP8LTG_Xgr4l8j5msCTk27XSqAAOrVg/exec";
    }
}