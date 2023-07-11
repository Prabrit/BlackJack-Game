const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const newCardBtn = document.querySelector("#newCardBtn");

const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");

startBtn.addEventListener("click", () => {
  startGame();
});

newCardBtn.addEventListener("click", () => {
  newcard();
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

cardsEl.style.display = "none";
sumEl.style.display = "none";

let cards = [];
let hasBlackjack = false;
let isAlive = false;
let sum = 0;

console.log(cards);

function resetGame() {
  cards = [];
  hasBlackjack = false;
  isAlive = false;
  sum = 0;

  messageEl.style.display = "";
  messageEl.textContent = "Wanna play a round?";

  cardsEl.textContent = "";
  cardsEl.style.display = "none";

  sumEl.textContent = "";
  sumEl.style.display = "none";

  startBtn.style.display = "";
  resetBtn.style.display = "none";
  newCardBtn.style.display = "none";
}

function startGame() {
  let firstCard = getRandom();
  let secondCard = getRandom();
  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard;

  cardsEl.style.display = "";
  sumEl.style.display = "";

  startBtn.style.display = "none";
  isAlive = true;

  newCardBtn.style.display = "";
  resetBtn.style.display = "";

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card !?";
  } else if (sum === 21) {
    message = "Woohoo!! You have got a blackjack!!";
    hasBlackjack = true;
    newCardBtn.style.display = "none";
    startBtn.style.display = "";
  } else {
    message = "You are out of the game!";
    isAlive = false;
    newCardBtn.style.display = "none";
    resetBtn.style.display = "";
  }

  messageEl.textContent = message;
}

function newcard() {
  let card = getRandom();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}

function getRandom() {
  let Randomnumber = Math.floor(Math.random() * 13) + 1;

  if (Randomnumber > 10) {
    return 10;
  } else if (Randomnumber === 1) {
    return 11;
  } else {
    return Randomnumber;
  }
}
