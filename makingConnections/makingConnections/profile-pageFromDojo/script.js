
function removeConnectReqTodd(imgBtn){
    let eraseThis = document.querySelector('#'+imgBtn);
    eraseThis.remove();
}


function removeConnectReqPhil(imgBtn){
    let eraseThis = document.querySelector('#'+imgBtn);
    eraseThis.remove();
}

function editName(name){
    let mainName = document.querySelector('#'+name)
   if(mainName.innerText === 'Jane Doe'){
        mainName.innerText = 'IDK';
   }else{
        mainName.innerText = 'Jane Doe'
   }
}

function decreaseConncetions(circle){
    let spanElement = document.querySelector('#'+circle);
    let count = spanElement.innerText;
    count--;
    spanElement.innerText = count;
}

function increaseConnections(circle){
    let spanElement = document.querySelector('#'+circle);
    let count = spanElement.innerText;
    count++;
    spanElement.innerText = count;
}