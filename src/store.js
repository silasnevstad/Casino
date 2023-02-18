import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameReducer';

const initialState = {
    game: {
        score: 0,
        highscore: 0,
        dealerHand: [],
        playerHand: [],
        currentDealerScore: 0,
        currentPlayerScore: 0,
        gameStage: 'ready',
        hasPair: false,
        deck: []
    }
};

const rootReducer = {
    game: gameReducer,
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

export default store;
