// var deck = [];
// var playerHand = [];
// var dealerHand = [];

// let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
// let values = ['Ace', 'King', 'Queen', 'Jack', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
// function createDeck() {}
var deal = () => {
    createCard('9_of_hearts', 'dealer')
    createCard('9_of_hearts', 'dealer')
    createCard('9_of_hearts', 'player')
    createCard('9_of_hearts', 'player')
    
    // // deal 2 cards to dealer
    // let dealerCard = document.createElement("img");
    // let dealerCard2 = document.createElement("img");
    // dealerCard.src= "images/9_of_hearts.png";
    // dealerCard2.src="images/ace_of_diamonds.png";
    // dealerCard.setAttribute("class", "card");
    // dealerCard2.setAttribute("class", "card");
    // document.getElementById("dealer-hand").appendChild(dealerCard);
    // document.getElementById("dealer-hand").appendChild(dealerCard2);
    // // deal 2 cards to player
    // let playerCard = document.createElement("img");
    // let playerCard2 = document.createElement("img");
    // playerCard.src= "images/king_of_hearts.png";
    // playerCard2.src="images/ace_of_spades.png";
    // playerCard.setAttribute("class", "card");
    // playerCard2.setAttribute("class", "card");
    // document.getElementById("player-hand").appendChild(playerCard);
    // document.getElementById("player-hand").appendChild(playerCard2);
}

function createCard(value, person) {
    let card = document.createElement("img");
    card.src= "images/" + value + ".png";
    card.setAttribute("class", "card");
    document.getElementById(person + "-hand").appendChild(card);
}

document.getElementById("deal-button").addEventListener("click", deal);

