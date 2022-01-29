"use strict";

function finalValidation(){

   let alertArrayMessage=[false,false,false,false];
   alertArrayMessage[0]=firstNameValid();
   alertArrayMessage[1]=lastNameValid();
   alertArrayMessage[2]=emailValid();
    
   for(let i=0; i<alertArrayMessage.length; i++){
      if(alertArrayMessage[i]==false){
        alertArrayMessage[3]=false;
        break;
      }else{
        alertArrayMessage[3]=true;
      }     
   }
   if(alertArrayMessage[3]==true){
       alertArrayMessage[3]=false;
       sendEmail()
   }

}

function firstNameValid(){
    let fName=document.querySelector('#Fname').value;
    var letters = (/^[A-Za-z]+$/);
    if(fName.match(letters))
    {
        return true;
    }else{
        if(fName!=""){
            window.confirm("You enter wrong first name. You must enter only letters.");
        }
        return false;
    }
}

function lastNameValid(){
    let lName=document.querySelector('#Lname').value;
    var letters = (/^[A-Za-z]+$/);
    if(lName.match(letters))
    {
        return true;
    }else{
        
        if(lName!=""){
            window.confirm("You enter wrong last name. You must enter only letters.");
        }
        return false;
    }
}

function emailValid(){
    let mail=document.querySelector('#Email').value;
    var letters =(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if(mail.match(letters))
    {
        return true;
    }else{
        
        if(mail!=""){
            window.confirm("You enter wrong email type.");
        }
        return false;
    }
}

function sendEmail() {
	// mailto:info@spifos.com
    window.confirm("Email sended!!");
}