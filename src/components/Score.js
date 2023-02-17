import React from 'react';

function Balance({ score }) {
  return (
    <div className="score">
      <span className="score-value">{score}</span>
    </div>
  );
}

export default Balance;
