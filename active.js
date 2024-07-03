const myEmail = document.getElementById("email");
const myText = document.getElementById("text");
const myPassword = document.getElementById("password");
const myRequired = document.getElementById("required");
const myShow = document.getElementById("show");
const mySubmit = document.getElementById("submit");
const mySection = document.getElementById("section");
var emailMatch = /^([A-Za-z0-9_\-\.])*\@([a-zA-Z0-9_\-\.])*\.([a-zA-Z]){2,4}$/;
var passwordMatch = /^[A-Za-z0-9]{4,8}$/;
const loader = document.querySelector(".loader")

myShow.onclick = function(){
  if(myPassword.type=="password"){
    myPassword.type = "text";
    myShow.innerHTML = "Hide password";
  }
  else{
    myPassword.type = "password";
    myShow.innerHTML = "Show password";
  }
}


myEmail.onclick = function(){
  if(myEmail.type=="text"){
    myEmail.style.borderColor ="black";
  }
  }
  myEmail.onmouseout= function(){
    if(myEmail.type=="text"){
      myEmail.style.borderColor ="grey";
    } 
  }

  myPassword.onclick = function(){
    if(myPassword.type=="password"){
      mySection.style.borderColor ="black";
    }
    }
    myPassword.onmouseout= function(){
      if(myPassword.type=="password"){
        mySection.style.borderColor ="grey";
      } 
    }

    function validation(){
      if(!myEmail.value.match(emailMatch)){
        myText.innerHTML ="this is not a valid email address";
        myEmail.style.borderColor = "red";
      }
      else{
        myText.innerHTML ="";
        myEmail.style.borderColor ="green";
        
      }
    }

    mySubmit.onclick = function(){
      if(myEmail.value.length==0){
        myText.innerHTML = "email is a required field";
        myEmail.style.borderColor = "red";
        return false;
      }
      else{
        myText.innerHTML ="";
        myEmail.style.borderColor = "black";
      }
      if(!myEmail.value.match(emailMatch)){
        myText.innerHTML ="this is not a valid email address";
        myEmail.style.borderColor ="red";
        return false;
      }else{
        myText.innerHTML="";
        myEmail.style.borderColor ="black";
        loader.style.visibility ="visible";
        setTimeout(()=>{
          mySubmit.innerHTML = "submitted ✔";
          loader.style.visibility ="hidden";
        },3000);
      }
    }



    mySubmit.addEventListener("click",(e)=> {

         

      if(myPassword.value.length==0){
        myRequired.innerHTML = "password is required";
        mySection.style.borderColor = "red";
        e.preventDefault();
      }
      else{
        myRequired.innerHTML ="";
        mySection.style.borderColor = "black";
        
        }
        if(!myPassword.value.match(passwordMatch)){
          myRequired.innerHTML ="invalid password";
          mySection.style.borderColor = "red";
          e.preventDefault();

        } else{
         myRequired.innerHTML ="";
          mySection.style.borderColor ="black";
          loader.style.visibility ="visible";
          setTimeout(()=>{
            loader.style.visibility = "hidden";
            mySubmit.innerHTML ="submitted ✔";
          },3000)
        }
      
  })

  
  
  function valid(){
    if(!myPassword.value.match(passwordMatch)){
      myRequired.innerHTML = "invalid password";
      mySection.style.borderColor ="red";
      
    }
    else{
      myRequired.innerHTML ="";
      mySection.style.borderColor ="green";
    }
  }



  
  