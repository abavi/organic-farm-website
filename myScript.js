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

      if(email.value == "plm@yahoo.com" && pass.value == "ddd") {        
        return true;
      } else {
          alert("E-mail or password incorrect!");
          return false;
      }           
    }

    document.getElementById('loginButton').onclick = function () {
        var email = document.getElementById("email");
        var pass = document.getElementById("password");
        if(required(email, pass)){
            location.replace("index.html");
        }
    };
 
