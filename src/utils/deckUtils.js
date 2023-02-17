export const shuffleDeck = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }

  return deck;
};


export const getDeck = (numberOfDecks = 3) => {
  const suits = ["hearts", "diamonds", "clubs", "spades"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


  const newDeck = [];

  for (let i = 0; i < numberOfDecks; i++) {
    for (let suit of suits) {
      for (let value of values) {
        newDeck.push({ value, suit });
      }
    }
  }

  return newDeck;
}

export const getCardValue = (card) => {
  if (!card || !card.value) {
    return 0;
  }

  const { value } = card;

  if (["J", "Q", "K"].includes(value)) {
    return 10;
  }

  if (value === "A") {
    return 11;
  }

  return parseInt(value);
}

export const getHandValue = (hand) => {
  let score = 0;
  let hasAce = false;

  for (let card of hand) {
    const cardValue = getCardValue(card);

    if (cardValue === 11) {
      hasAce = true;
    }

    score += cardValue;
  }

  if (hasAce && score > 21) {
    score -= 10;
  }

  return score;
}

