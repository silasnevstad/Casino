import React from 'react';

function Balance({ score, highscore }) {
  return (
    <div className="score">
      <span className="score-value">Current:{score}</span>
      <span className="highscore-value">Best:{highscore}</span>
    </div>
  );
}

export default Balance;
