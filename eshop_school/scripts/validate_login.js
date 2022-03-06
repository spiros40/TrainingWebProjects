

    /*check if valid email entered in login_form account.html */
    function validate_email()
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login_form.email.value))
        {        
            return true;        
        }
        else
        {
            alert("You must enter a correct email");
            return false;
        }
    } 