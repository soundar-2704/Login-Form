
function login(){
     let userVal = document.getElementById("user").value;
     let passVal = document.getElementById("password").value;

     if(userVal=="Entri Elevate" && passVal=="admin123")
     {
        window.alert("Login successfully!!")
        window.location.assign("homepage.html");

     }
     else
     {
         alert("Login Failed")
      }
 }

function forget()
 {
     let a=prompt("Enter login E-Mail:");
     window.alert("Verification link sent to your email.Thank You!");
    
 }
