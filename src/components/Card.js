import React from 'react';
import { getCardImage } from '../utils/utils';

function Card({ card }) {
  return (
    <div className="card">
      <div className={`card-face ${card.suit}`}>
        <img src={getCardImage(card)} alt={`${card.value} of ${card.suit}`} className="card-image"/>
      </div>
    </div>
  );
}

export default Card;
