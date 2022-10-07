function cityAlert(list){
    alert('Loading weather report for '+list.innerText+'.')
}

function removeCookie(element){
    let cookieElement = document.querySelector('#'+element);
    cookieElement.remove();
}

function c2f(temp){
    return Math.round(9/5* temp + 32);
}

function f2c(temp){
    return Math.round(5/9* (temp - 32));

}

function changeDegree(element){
    alert('Loading weather reports...')
    for(var i=1; i<9; i++){
        if(element.value == '')
        var tempSpan = document.querySelector('#temp'+i)
        var tempVal = parseInt(tempSpan.innerText);
    }
}

// console.log("page loading...");

// var cookieDiv = document.querySelector(".cookie-policy");

// function loading() {
//     alert("Loading weather report...")
// }

// function accept() {
//     cookieDiv.remove();
// }

// function c2f(temp) {
//     return Math.round(9 / 5 * temp + 32);
// }

// function f2c(temp) {
//     return Math.round(5 / 9 * (temp - 32));
// }

// function convert(element) {
//     console.log(element.value);
//     for(var i=1; i<9; i++) {
//         var tempSpan = document.querySelector("#temp" + i);
//         var tempVal = parseInt(tempSpan.innerText);
//         if(element.value == "°C") {
//             tempSpan.innerText = f2c(tempVal);
//         } else {
//             tempSpan.innerText = c2f(tempVal);
//         }
//     }
// }