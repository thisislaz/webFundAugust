async function getMoney(){
    //get information from api
    var coinGeckoDataRaw = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //convert raw data we get back to JSON--> a format that js can understand and work with
    var jsonCoinData = await coinGeckoDataRaw.json();
    //put that info into the div with the id of coinList
    // console.log(jsonCoinData);
    //jsonCoinData is an array of objects
    
    //grab the div where we want to store our data from the html using its id
    let div = document.querySelector('#coinList')

    //clear our previous coins
    div.replaceChildren();

    //FOR every coin, i want to create a paragraph tag, and append (attach) that paragrpah tag with current coin info, to a p tag as a child to div#coinlist
    for ( let i =0;i<jsonCoinData.length;i++){
        let currentCoin= jsonCoinData[i];

        //create a paragraph tag using js
        let pTag = document.createElement('p');
        // pTag.innerText = currentCoin.name + '- $' + currentCoin.current_price;

        pTag.innerText = `${currentCoin.name} + $ ${currentCoin.current_price}`;
        //grab the div fromt he html using its id
        
        //attach the ptag to our div
        div.appendChild(pTag);
    }
}