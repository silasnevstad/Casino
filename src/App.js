import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Game from './components/Game';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="title">BlackJack</h1>
        <Game />
      </div>
    </Provider>
  );
}

export default App;
