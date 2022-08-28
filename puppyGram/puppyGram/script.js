console.log("wazzzzzzzzzzzzzzz")

function petDog(){
    alert('You just pet the puppy how nice of you!!')
    // console.log('You pet this dog!')
}

function toggleLogin(buttonElement){
    //btn represents the button that was clicked
    //to change its text --> modify the btn.innerText top equal logout
    //if the buttons inner text currently says Login, then change it to logout
    //otherwise change it to login
    buttonElement.innerText="Logout";
    if(buttonElement.innerText === "Log In"){
        buttonElement.innerText="Logout";
    }
    else{
        buttonElement.innerText="Log In";
    }
}

function removeButton(btn){
    // console.log('removing button!', btn)
    btn.remove();
}

function playVideo(videoElement){
    // console.log('annned action!', videoElement);
    videoElement.play();
}

function pauseVideo(videoElement){
    videoElement.pause();
}

function switchImage(imgElement){
    
    if(imgElement.src === "http://127.0.0.1:5500/puppyGram/puppyGram/resources/puppy.jpeg"){
        imgElement.src = "./resources/anothaPuppy.jpeg"
    }
    else{
        imgElement.src = "./resources/puppy.jpeg"
    }
}

function removeCookieBox(id){
    //grab from the html an element with the id of "cookiebox" and put it in a variable
    let elementToRemove = document.querySelector("#"+id);
    elementToRemove.remove();
}

function increaseLikes(elementID){
    console.log('i liike', elementID);
    //grab an element with that elementID
    let spanElement = document.querySelector("#"+elementID);
    console.log(spanElement.innerText);
    //sstore the number that is in the span element into a variable
    let currentCount = spanElement.innerText;
    //increment the count
    currentCount++;
    //update the spanElement inner text to be the current count after increment the current count
    spanElement.innerText = currentCount;
}

function searchPuppy(){
    console.log("puppy named clifford")
    let element = document.querySelector('#name-search');
    alert('you searched for'  + element.value);
}

function chooseLocation(element){
    
    // alert("You are searching for pets in: " + element.value)
    alert(`You are searching for a dog in ${element.value}. Come by anytime`)
}