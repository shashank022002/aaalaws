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
    }
    return true;
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
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(info.value.match(phoneno)){
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
    }
    return true;
}

// function formValidation(){
        //   var userName=document.contactForm.userName;
        //   var userEmail=document.contactForm.userEmail;
        //   var userPhone=document.contactForm.userPhone;
        //   var userMessage=document.contactForm.userMessage;

        //   if(valid_name(userName)){
        //     if(valid_email(userEmail)){
        //       if(valid_phone(userPhone)){
        //         if(valid_name(userMessage)){
        //             break;
        //         }
        //       }
        //     }
        //     return false;
        //     var form = document.getElementById("myForm");
        //     function handleForm(event) { event.preventDefault(); } 
        //     form.addEventListener('submit', handleForm);
        //     alert("hihi");
        //   }

        //   function valid_name(info){
        //     var name_length=info.value.length;
        //     if(name_length==0){
        //       info.style.borderColor="rgb(235, 52, 52)";
        //       document.getElementById("name_error_message").style.display="block";
        //       return false;
        //     }
        //     else if(name_length>=101){
        //       info.style.borderColor="rgb(235, 52, 52)";
        //       document.getElementById("name_error_message1").style.display="block";
        //       return false;
        //     }
        //     else{
        //       info.style.borderColor="transparent";
        //       document.getElementById("name_error_message1").style.display="none";
        //       document.getElementById("name_error_message").style.display="none";
        //     }
        //     return true;
        //   }

        //   function valid_email(info)
        //   {
        //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //     if(info.value.match(mailformat))
        //     {
        //       info.style.borderColor="transparent";
        //       document.getElementById("email_error_message").style.display="none";
        //       return true;
        //     }
        //     else
        //     {
        //       info.style.borderColor="rgb(235, 52, 52)";
        //       document.getElementById("email_error_message").style.display="block";
        //       return false;
        //     }
        //   }

        //   function valid_phone(info)
        //   {
        //     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        //     if(info.value.match(phoneno)){
        //       info.style.borderColor="transparent";
        //       document.getElementById("phone_error_message").style.display="none";
        //       return true;
        //     }
        //     else{
        //         info.style.borderColor="rgb(235, 52, 52)";
        //         document.getElementById("phone_error_message").style.display="block";
        //         return false;
        //     }
        //   }

        //   function valid_message(info){
        //     var name_length=info.value.length;
        //     if(name_length==0){
        //       info.style.borderColor="rgb(235, 52, 52)";
        //       document.getElementById("message_error_message").style.display="block";
        //       return false;
        //     }
        //     else if(name_length>=1001){
        //       info.style.borderColor="rgb(235, 52, 52)";
        //       document.getElementById("message_error_message1").style.display="block";
        //       return false;
        //     }
        //     else{
        //       info.style.borderColor="transparent";
        //       document.getElementById("message_error_message1").style.display="none";
        //       document.getElementById("message_error_message").style.display="none";
        //     }
        //     return true;
        //   }
        // }

          

        // }