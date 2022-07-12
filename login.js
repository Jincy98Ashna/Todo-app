// form validation starts
function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&&password=="12345"){
       alert("Login successfully");
       
       return true;
    }
        
    else{
        alert("Login failed");   
        return false;
    }
}

// form validation ends
