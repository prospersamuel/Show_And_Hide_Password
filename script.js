let eyeIcon = document.getElementById("eyeicon")
let password = document.getElementById("password")


eyeIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text"
        eyeIcon.src = "icons/open-eye.png"
    }else{
        password.type = "password"
        eyeIcon.src = "icons/close-eye.png"
    }
    
}