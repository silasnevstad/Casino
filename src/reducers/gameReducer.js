import { getDeck } from '../utils/deckUtils';

const initialState = {
  initialScore: 0,
  score: 0,
  dealerHand: [],
  playerHand: [],
  currentDealerScore: 0,
  currentPlayerScore: 0,
  gameStage: 'ready',
  hasPair: false,
  deck: []
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BET':
      return {
        ...state,
        bet: action.payload
      };
    case 'DEAL_CARDS':
      console.log('info', action.payload)
      return {
        ...state,
        dealerHand: action.payload.dealerHand,
        playerHand: action.payload.playerHand,
        currentDealerScore: action.payload.currentDealerScore,
        currentPlayerScore: action.payload.currentPlayerScore,
        gameStage: 'inProgress',
        deck: action.payload.newDeck,
        hasPair: action.payload.playerHasPair
      };
    case 'HIT':
      return {
        ...state,
        playerHand: [...state.playerHand, action.payload.card],
        currentPlayerScore: action.payload.score
      };
    case 'BUST':
      return {
        ...state,
        gameStage: 'result'
      };
    case 'UPDATE_DECK':
      return {
        ...state,
        deck: action.payload
      };
      case 'UPDATE_SCORE_CORRECT':
        console.log('score', action.payload);
        console.log('info', state);
        return {
          ...state,
          score: action.payload,
        };
      
    case 'UPDATE_SCORE_INCORRECT':
      return {
        ...state,
        score: 0,
        gameStage: 'result'
      };
    case 'STAND':
      return {
        ...state,
        dealerHand: action.payload.hand,
        currentDealerScore: action.payload.score,
        gameStage: 'result'
      };
    case 'RESET_GAME':
      return {
        ...initialState,
        initialScore: state.initialScore,
        score: state.score,
        deck: getDeck(),
      };
    default:
      return state;
  }
};

export default gameReducer;
