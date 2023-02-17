import strategyChart from '../utils/strategyChart';
import { getCardValue, getHandValue } from '../utils/deckUtils';

export const getOptimalMove = (dealerCard, playerHand) => {
    const playerScore = getHandValue(playerHand);
    const isSoft = playerHand.some(card => card.value === 'A');
    const isPair = playerHand.length === 2 && playerHand[0].value === playerHand[1].value;
    const isHard = !isSoft && !isPair;

    if (isSoft) {
        return strategyChart['soft'][playerScore][getCardValue(dealerCard)];
    } else if (isPair) {
        const score = playerHand[0].value === 'A' ? 13 : playerScore;
        return strategyChart['pair'][score][getCardValue(dealerCard)];
    } else if (isHard) {
        return strategyChart['hard'][playerScore][getCardValue(dealerCard)];
    }
}

export const getCardImage = (card) => {
    let cardSuit = card.suit;
    let cardValue = card.value;
    if (cardValue === "A") {
      cardValue = "ace";
    } else if (cardValue === "J") {
      cardValue = "jack";
    } else if (cardValue === "Q") {
      cardValue = "queen";
    } else if (cardValue === "K") {
      cardValue = "king";
    }
  
    const imagePath = `/cards/${cardValue}_of_${cardSuit}.png`;
    return imagePath;
  };
  