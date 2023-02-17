import React from 'react';
import Card from './Card';

function Hand({ cards = [], score, isDealer, gameStage }) {
    return (
        <div className="hand">
            <div className={isDealer ? 'dealer-hand' : 'player-hand'}>
                <h2>{gameStage === 'inProgress' ? isDealer ? 'Dealer' : 'Player' : ''}</h2>
                <div className="cards">
                    <span>
                        {isDealer && gameStage === 'inProgress' ? (
                            <Card card={cards[0]} />
                        ) : (
                            cards.map((card, index) => (
                                <Card key={index} card={card} />
                            ))
                        )}

                    </span>
                </div>
            </div>
        </div>
    );
}

export default Hand;
