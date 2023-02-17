import { getDeck, shuffleDeck, getCardValue, getHandValue } from '../utils/deckUtils';
import { getOptimalMove } from '../utils/utils';

export const setBet = (bet) => {
  return {
    type: 'SET_BET',
    payload: bet
  };
};

export const dealCards = () => (dispatch) => {
  const deck = getDeck();
  const shuffledDeck = shuffleDeck(deck);

  let playerCard1 = shuffledDeck.pop();
  let hiddenCard = shuffledDeck.pop();
  let playerCard2 = shuffledDeck.pop();
  let dealerCard1 = shuffledDeck.pop();
  let playerHand = [playerCard1, playerCard2];
  let dealerHand = [dealerCard1, hiddenCard];

  // if either player or dealer has 21, deal them new cards
  while (getHandValue(playerHand) === 21 || getHandValue(dealerHand) === 21) {
    playerCard1 = shuffledDeck.pop();
    hiddenCard = shuffledDeck.pop();
    playerCard2 = shuffledDeck.pop();
    dealerCard1 = shuffledDeck.pop();
    playerHand = [playerCard1, playerCard2];
    dealerHand = [dealerCard1, hiddenCard];
  }

  const playerHasPair = playerCard1.value === playerCard2.value;

  const newDeck = shuffledDeck;


  const currentDealerScore = getCardValue(dealerCard1);
  const currentPlayerScore = getHandValue(playerHand);

  dispatch({
    type: 'DEAL_CARDS',
    payload: {
      newDeck,
      dealerHand,
      playerHand,
      currentDealerScore,
      currentPlayerScore,
      playerHasPair
    }
  });
};

export const hit = () => (dispatch, getState) => {
  const { game } = getState();
  const deck = game.deck;

  const nextCard = getNextCard(deck);
  const playerHand = game.playerHand;
  const newPlayerHand = [...playerHand, nextCard];
  const newScore = getHandValue(newPlayerHand);

  dispatch({
    type: 'HIT',
    payload: {
      card: nextCard,
      score: newScore
    }
  });

  if (newScore > 21) {
    dispatch({
      type: 'BUST'
    });
  }

  // Remove the next card from the deck
  const newDeck = deck.slice(1);
  dispatch({
    type: 'UPDATE_DECK',
    payload: newDeck
  });
};

export const guessHit = () => (dispatch, getState) => {
  const { game } = getState();
  const playerHand = game.playerHand;
  const dealerHand = game.dealerHand;
  const dealerUpCard = dealerHand[0];

  const optimalDecision = getOptimalMove(dealerUpCard, playerHand);

  if (optimalDecision === 'H') {
    dispatch(correctGuess(dispatch));
  } else {
    dispatch(incorrectGuess(dispatch));
  }
};

export const guessStand = () => (dispatch, getState) => {
  const { game } = getState();
  const playerHand = game.playerHand;
  const dealerHand = game.dealerHand;
  const dealerUpCard = dealerHand[0];

  const optimalDecision = getOptimalMove(dealerUpCard, playerHand);

  if (optimalDecision === 'S') {
    dispatch(correctGuess(dispatch));
  } else {
    dispatch(incorrectGuess(dispatch));
  }
};

export const guessDouble = () => (dispatch, getState) => {
  const { game } = getState();
  const playerHand = game.playerHand;
  const dealerHand = game.dealerHand;
  const dealerUpCard = dealerHand[0];
  
  const optimalDecision = getOptimalMove(dealerUpCard, playerHand);

  if (optimalDecision === 'D') {
    dispatch(correctGuess(dispatch));
  } else {
    dispatch(incorrectGuess(dispatch));
  }
};

export const guessSplit = () => (dispatch, getState) => {
  const { game } = getState();
  const playerHand = game.playerHand;
  const dealerHand = game.dealerHand;
  const dealerUpCard = dealerHand[0];

  const optimalDecision = getOptimalMove(dealerUpCard, playerHand);
  
  if (optimalDecision === 'P') {
    dispatch(correctGuess(dispatch));
  } else {
    dispatch(incorrectGuess(dispatch));
  }
};

export const guess = (guess) => (dispatch, getState) => {
  const { game } = getState();
  const playerHand = game.playerHand;
  const dealerHand = game.dealerHand;
  const dealerUpCard = dealerHand[0];

  const optimalDecision = getOptimalMove(dealerUpCard, playerHand);

  if (optimalDecision === guess) {
    dispatch(correctGuess());
  } else {
    dispatch(incorrectGuess());
  }
};

export const correctGuess = () => {
  return (dispatch, getState) => {
    const { game } = getState();
    const newScore = game.score + 1;
    console.log('newScore', newScore);
    dispatch({
      type: 'UPDATE_SCORE_CORRECT',
      payload: newScore,
    });
    dispatch(resetGame());
    dispatch(dealCards());
  };
};


export const incorrectGuess = () => (dispatch, getState) => {
  const { game } = getState();
  const score = game.score;
  // get the correct answer
  const playerHand = game.playerHand;
  const dealerHand = game.dealerHand;
  const dealerUpCard = dealerHand[0];
  const optimalDecision = getOptimalMove(dealerUpCard, playerHand);
  const decision_text = {'H': 'hitting', 'S': 'standing', 'D': 'doubling', 'P': 'splitting'}

  alert('Incorrect! Your score is ' + score + '.' + '\nStatistically ' + decision_text[optimalDecision] + ' was best.')
  // dispatch(resetGame());

  return dispatch({
    type: 'UPDATE_SCORE_INCORRECT',
  });
};

export const getNextCard = (deck) => {
  return deck[0];
}

export const stand = () => (dispatch, getState) => {
  const { game } = getState();
  let deck = game.deck;
  let dealerHand = game.dealerHand;
  let dealerScore = game.currentDealerScore;

  const hiddenCard = dealerHand[1];
  dealerScore += getCardValue(hiddenCard);

  while (dealerScore < 17) {
    const nextCard = getNextCard(deck);
    dealerHand = [...dealerHand, nextCard];
    dealerScore = getHandValue(dealerHand);
    deck = deck.slice(1);
  }

  dispatch({
    type: 'STAND',
    payload: {
      hand: dealerHand,
      score: dealerScore
    }
  });
};

export const resetGame = () => {
  return {
    type: 'RESET_GAME'
  };
};
