function removeItem(btn){
    btn.remove()
}

function thisWasLiked(){
    alert('Ninja was liked, thank you friend!!')
}

function loginChange(btn){
    btn.innerText = "Login";
        if( btn.innerText === "Login"){
            btn.innerText = "Logout";
        }
        else {
            btn.innerText = "Login";
        }
}