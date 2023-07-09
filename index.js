let firstCard = getRandom();
let secondCard = getRandom();

let cards = [firstCard,secondCard] ;
let hasBlackjack=false;
let isAlive = false;
let sum = firstCard+secondCard;
let message=" ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el");

console.log(cards);
function getRandom(){
   let Randomnumber = Math.floor(Math.random()*13)+1;

   if(Randomnumber>10){
    return 10;
   }
   else if (Randomnumber===1){
    return 11;
   } 

   else{
    return Randomnumber;
   }
}

function startGame(){
    isAlive = true;
  
    renderGame()
}
function renderGame(){
    
    cardsEl.textContent = "cards: " ;
    for(let i =0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+ " ";
    }
 
    sumEl.textContent ="sum: "+sum;
    if(sum <=20){

        message = "Do you want to draw a new card !?"

    }

    else if(sum === 21){

        message = "Woohoo!! You have got a blackjack!!";
        hasBlackjack = true;
        
    }

    else{
        message = "You are out of the game!";
        isAlive = false;
    
    }
    

    messageEl.textContent = message;

}

function newcard(){
    console.log("Drawing a new card from the deck !");

    let card = getRandom();
    sum += card;
 cards.push(card);
 console.log(cards);
    renderGame();
}