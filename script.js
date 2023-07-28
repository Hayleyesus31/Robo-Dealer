// Card object constructor
function Card(value, suit) {
  this.value = value;
  this.suit = suit;
  this.name = this.getName();
}

Card.prototype.getName = function () {
  if (this.value === 1) {
    return 'Ace';
  } else if (this.value === 11) {
    return 'Jack';
  } else if (this.value === 12) {
    return 'Queen';
  } else if (this.value === 13) {
    return 'King';
  } else {
    return this.value.toString();
  }
};

// Create an array of 52 Card objects representing all unique cards in a deck
const deck = [];
const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];

for (let value = 1; value <= 13; value++) {
  for (const suit of suits) {
    deck.push(new Card(value, suit));
  }
}

// Function to randomly select 5 cards from the deck
function drawHand() {
  const handSize = 5;
  const hand = [];

  while (hand.length < handSize) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];

    if (!hand.includes(card)) {
      hand.push(card);
    }
  }

  displayHand(hand);
}

// Function to display the information about the selected cards on the HTML page
function displayHand(hand) {
  const handContainer = document.getElementById('hand');
  handContainer.innerHTML = '';

  for (const card of hand) {
    const cardName = card.name + ' of ' + card.suit;

    const cardElement = document.createElement('p');
    cardElement.textContent = cardName;
    handContainer.appendChild(cardElement);
  }
}

