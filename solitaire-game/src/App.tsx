import React from 'react';
import { Example } from './components/example/Example';
import './App.css';
import { DeckObject } from './components/DeckObject';

function App() {
  return (
    <div className="App">
      <h1>Solitaire</h1>
      <Example />
      <DeckObject />
    </div>
  );
}

export default App;
