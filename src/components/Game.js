import React from 'react';
import Hand from './Hand';
import Controls from './Control';
import Score from './Score';
import HelpButton from './HelpButton';
import { useDispatch, useSelector } from 'react-redux';
import { dealCards, hit, stand, resetGame, guessHit, guessDouble, guessSplit, guessStand, guess } from '../actions/gameActions';

function Game() {

    const dispatch = useDispatch();
    const game = useSelector(state => state.game);

    const handleDealClick = () => {
        dispatch(dealCards());
    };

    const handleHitClick = () => {
        dispatch(hit());
    };

    const handleStandClick = () => {
        dispatch(stand());
    };

    const handleResetClick = () => {
        dispatch(resetGame());
    };

    const handleGuessHit = () => {
        dispatch(guess('H'));
    };

    const handleGuessStand = () => {
        dispatch(guess('S'));
    };

    const handleGuessDouble = () => {
        dispatch(guess('D'));
    };

    const handleGuessSplit = () => {
        dispatch(guess('P'));
    };

    return (
        <div>
            <Score score={game.score} />
            <HelpButton />
            <Hand cards={game.dealerHand} score={game.currentDealerScore} isDealer={true} gameStage={game.gameStage} />
            <Hand cards={game.playerHand} score={game.currentPlayerScore} isDealer={false} gameStage={game.gameStage} />
            <Controls
                gameStage={game.gameStage}
                hasPair={game.hasPair}
                handleDealClick={handleDealClick}
                handleHitClick={handleGuessHit}
                handleStandClick={handleGuessStand}
                handleDoubleClick={handleGuessDouble}
                handleSplitClick={handleGuessSplit}
                handleResetClick={handleResetClick}
            />
            {/* <BetForm /> */}
        </div>
  );
}

export default Game;
