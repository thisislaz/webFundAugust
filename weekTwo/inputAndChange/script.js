var nameSpan = document.querySelector('#name');
var foodToOrder = "pizza";

function setName(element){
    console.log(element.value)
    nameSpan.innerText = element.value;
}

function pickFood(element){
    alert('You have changed your selection to '+element.value)
    foodToOrder = element.value
}

function order(){
    alert('Ordering a '+foodToOrder)

        if(foodToOrder === 'Sushi'){
            alert('Careful this contains raw food ingridients')
        }
}

function changeName(name){
    let nameCard = document.querySelector('#name-card')
    nameCard.innerText = name.value
}


