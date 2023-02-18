import React from 'react';
import { Example } from './components/example/Example';
import { DeckObject } from './components/DeckObject';
import { Tableau } from './components/tableau/Tableau';

function App() {
  return (
    <div className="App">
      <h1>Solitaire</h1>
      <Tableau>
        <DeckObject />
        <DeckObject />
      </Tableau>
    </div>
  );
}

export default App;
