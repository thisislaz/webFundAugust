function removeItem(btn){
    btn.remove()
}

function thisWasLiked(){
    alert('Ninja was liked, thank you friend!!')
}

function loginChange(btn){
<<<<<<< HEAD
=======
    btn.innerText = "Login";
>>>>>>> 22981634309487f6fdbe54df8d2c3f63600be950
        if( btn.innerText === "Login"){
            btn.innerText = "Logout";
        }
        else {
            btn.innerText = "Login";
        }
}