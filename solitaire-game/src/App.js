import logo from './logo.svg';
import './App.css';
import { DeckObject } from './components/DeckObject.jsx';
import {Card} from './components/cards/Card.js';
import spadesAce from "./assets/spades_ace.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <DeckObject/>
    </div>
  );
}

export default App;
