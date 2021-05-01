(function() {
    var name = document.getElementById('userName');
    var email = document.getElementById('userEmail');
    var phone = document.getElementById('userPhone');
    var message = document.getElementById('userMessage');
    var submit= document.getElementById('submitBT');

    name.addEventListener('keypress', function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            email.focus();
        }
    });

    email.addEventListener('keypress', function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            phone.focus();
        }
    });

    phone.addEventListener('keypress', function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            message.focus();
        }
    });

    // message.addEventListener('keypress', function(event) {
    //     if (event.keyCode == 13) {
    //         // event.preventDefault();
    //         // if(valid_name(document.contactForm.userName)&&valid_email(document.contactForm.userEmail)&&valid_phone(document.contactForm.userPhone)&&valid_message(document.contactForm.userMessage)){
    //         //     document.getElementById("contactForm").action ="https://script.google.com/macros/s/AKfycbwLZbDhqZ9eP8LTG_Xgr4l8j5msCTk27XSqAAOrVg/exec";
    //         // }
    //     }
    // });
}());

