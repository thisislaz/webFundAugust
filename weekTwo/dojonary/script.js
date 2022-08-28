function removeItem(btn){
    btn.remove()
}

function thisWasLiked(){
    alert('Ninja was liked, thank you friend!!')
}

function loginChange(btn){
        if( btn.innerText === "Login"){
            btn.innerText = "Logout";
        }
        else {
            btn.innerText = "Login";
        }
}