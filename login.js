// form validation starts
function confirm(run){
    var username=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&&password=="12345"){
        alert("Login successfully");
        run();
        return true;
    }
    else{
        
        return false;
        alert("Login failed");
    }
}
function run(){
    window.location.href="./todo.html"
}
confirm(run);


