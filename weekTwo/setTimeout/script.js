
function codeToRunLater(){
    for (let i=0; i<1111; i++){
        console.log('running: '+i);
    }
    
}

setTimeout(codeToRunLater, 1000);
console.log('end')