


/*check if valid email entered in login_form account.html */
function validate_new_user() {
   
    var pass = document.forms["new_user"]["password"].value;
    var conf_pass = document.forms["new_user"]["confirm_password"].value;
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(new_user.email.value)) {
        if (/^[a-z A-Z]+$/.test(new_user.first_name.value) && /^[a-z A-Z]+$/.test(new_user.second_name.value)) {
            if (/^[0-9]+$/.test(new_user.mob_number.value)) {
                if (pass == conf_pass) {
                    if (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(new_user.birth_date.value) ) {
                        return true;
                    }
                    else {
                        alert("Enter a valid birth date");
                        window.location.href = 'http://localhost/new_user.php';
                        return false;
                    }
                }
                else {
                    alert("Password doesn't match");
                    window.location.href = 'http://localhost/new_user.php';
                    return false;
                }
            }
            else {
                alert("mobile phone must be only numeric");
                window.location.href = 'http://localhost/new_user.php';
                return false;
            }
        }
        else {
            alert("First and second name must be only alphabets");
            window.location.href = 'http://localhost/new_user.php';
            return false; }

    }
    else {
        alert("You must enter a correct email");
        window.location.href = 'http://localhost/new_user.php';
        return false;
    }
} 