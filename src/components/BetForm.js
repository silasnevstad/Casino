import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBet } from '../actions/gameActions';

function BetForm() {
  const balance = useSelector(state => state.balance);
  const [bet, setBetAmount] = useState(0);
  const dispatch = useDispatch();

  const handleBetChange = event => {
    setBetAmount(event.target.value);
  };

  const handleBetSubmit = event => {
    event.preventDefault();
    if (bet <= balance) {
      dispatch(setBet(parseInt(bet)));
    }
  };

  return (
    <div className="bet-form">
      <h2>Bet</h2>
      <form onSubmit={handleBetSubmit}>
        <label>

            <input type="number" value={bet} onChange={handleBetChange} />
        </label>
        <button type="submit">Place Bet</button>
      </form>
    </div>
  );
}

export default BetForm;
