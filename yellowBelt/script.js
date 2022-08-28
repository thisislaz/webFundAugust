function showCart(){
    alert("Your cart is empty bruuuuuhh!")
}

function switchThisPic(img){
    if (img.src === "http://127.0.0.1:5500/yellowBeltExam/assets/succulents-1.jpg"){
        img.src = "./assets/succulents-2.jpg"
    }else{
        img.src = "./assets/succulents-1.jpg"
    }
}

function removeCookie(idNameGivenToCookieBox){
    let removeThisCookieBoxNow = document.querySelector('#'+idNameGivenToCookieBox)
    removeThisCookieBoxNow.remove()
}