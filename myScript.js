function required(email, pass) 
   {     
      if (pass.value.length == 0 && email.value.length == 0) 
      { 
         alert("Fields cannot be empty");  	
         return false; 
      }       
      else if (email.value.length == 0)
      { 
         alert("Field e-mail cannot be empty!");  	
         return false; 
      }
      else if (pass.value.length == 0)
      { 
         alert("Field password cannot be empty!");  	
         return false; 
      }

      if(email.value == "test@yahoo.com" && pass.value == "test") {        
        return true;
      } else {
          alert("E-mail or password incorrect!");
          return false;
      }           
    }

    var loginButton = document.getElementById('loginButton');    
    loginButton.onclick = function () { 
        var email = document.getElementById("email");
        var pass = document.getElementById("password");      
        if(required(email, pass)){
            location.replace("index.html");
        }
    };
 