import {Card} from './cards/Card';

// SPADES
import spadesAce from "../assets/spades_ace.svg";
import spades2 from "../assets/spades_2.svg";
import spades3 from "../assets/spades_3.svg";
import spades4 from "../assets/spades_4.svg";
import spades5 from "../assets/spades_5.svg";
import spades6 from "../assets/spades_6.svg";
import spades7 from "../assets/spades_7.svg";
import spades8 from "../assets/spades_8.svg";
import spades9 from "../assets/spades_9.svg";
import spades10 from "../assets/spades_10.svg";
import spadesJack from "../assets/spades_jack.svg";
import spadesQueen from "../assets/spades_queen.svg";
import spadesKing from "../assets/spades_king.svg";

// DIAMONDS
import diamondsAce from "../assets/diamonds_ace.svg";
import diamonds2 from "../assets/diamonds_2.svg";
import diamonds3 from "../assets/diamonds_3.svg";
import diamonds4 from "../assets/diamonds_4.svg";
import diamonds5 from "../assets/diamonds_5.svg";
import diamonds6 from "../assets/diamonds_6.svg";
import diamonds7 from "../assets/diamonds_7.svg";
import diamonds8 from "../assets/diamonds_8.svg";
import diamonds9 from "../assets/diamonds_9.svg";
import diamonds10 from "../assets/diamonds_10.svg";
import diamondsJack from "../assets/diamonds_jack.svg";
import diamondsQueen from "../assets/diamonds_queen.svg";
import diamondsKing from "../assets/diamonds_king.svg";

// CLUBS
import clubsAce from "../assets/clubs_ace.svg";
import clubs2 from "../assets/clubs_2.svg";
import clubs3 from "../assets/clubs_3.svg";
import clubs4 from "../assets/clubs_4.svg";
import clubs5 from "../assets/clubs_5.svg";
import clubs6 from "../assets/clubs_6.svg";
import clubs7 from "../assets/clubs_7.svg";
import clubs8 from "../assets/clubs_8.svg";
import clubs9 from "../assets/clubs_9.svg";
import clubs10 from "../assets/clubs_10.svg";
import clubsJack from "../assets/clubs_jack.svg";
import clubsQueen from "../assets/clubs_queen.svg";
import clubsKing from "../assets/clubs_king.svg";

// HEARTS
import heartsAce from "../assets/hearts_ace.svg";
import hearts2 from "../assets/hearts_2.svg";
import hearts3 from "../assets/hearts_3.svg";
import hearts4 from "../assets/hearts_4.svg";
import hearts5 from "../assets/hearts_5.svg";
import hearts6 from "../assets/hearts_6.svg";
import hearts7 from "../assets/hearts_7.svg";
import hearts8 from "../assets/hearts_8.svg";
import hearts9 from "../assets/hearts_9.svg";
import hearts10 from "../assets/hearts_10.svg";
import heartsJack from "../assets/hearts_jack.svg";
import heartsQueen from "../assets/hearts_queen.svg";
import heartsKing from "../assets/hearts_king.svg";

export const DeckObject = () => {
  
  const deck = [
    // SPADES
    new Card('SPADES', 1, spadesAce),
    new Card('SPADES', 2, spades2),
    new Card('SPADES', 3, spades3),
    new Card('SPADES', 4, spades4),
    new Card('SPADES', 5, spades5),
    new Card('SPADES', 6, spades6),
    new Card('SPADES', 7, spades7),
    new Card('SPADES', 8, spades8),
    new Card('SPADES', 9, spades9),
    new Card('SPADES', 10, spades10),
    new Card('SPADES', 11, spadesJack),
    new Card('SPADES', 12, spadesQueen),
    new Card('SPADES', 13, spadesKing),

    // DIAMONDS
    new Card('DIAMONDS', 1, diamondsAce),
    new Card('DIAMONDS', 2, diamonds2),
    new Card('DIAMONDS', 3, diamonds3),
    new Card('DIAMONDS', 4, diamonds4),
    new Card('DIAMONDS', 5, diamonds5),
    new Card('DIAMONDS', 6, diamonds6),
    new Card('DIAMONDS', 7, diamonds7),
    new Card('DIAMONDS', 8, diamonds8),
    new Card('DIAMONDS', 9, diamonds9),
    new Card('DIAMONDS', 10, diamonds10),
    new Card('DIAMONDS', 11, diamondsJack),
    new Card('DIAMONDS', 12, diamondsQueen),
    new Card('DIAMONDS', 13, diamondsKing),

    // CLUBS
    new Card('CLUBS', 1, clubsAce),
    new Card('CLUBS', 2, clubs2),
    new Card('CLUBS', 3, clubs3),
    new Card('CLUBS', 4, clubs4),
    new Card('CLUBS', 5, clubs5),
    new Card('CLUBS', 6, clubs6),
    new Card('CLUBS', 7, clubs7),
    new Card('CLUBS', 8, clubs8),
    new Card('CLUBS', 9, clubs9),
    new Card('CLUBS', 10, clubs10),
    new Card('CLUBS', 11, clubsJack),
    new Card('CLUBS', 12, clubsQueen),
    new Card('CLUBS', 13, clubsKing),

    // HEARTS
    new Card('HEARTS', 1, heartsAce),
    new Card('HEARTS', 2, hearts2),
    new Card('HEARTS', 3, hearts3),
    new Card('HEARTS', 4, hearts4),
    new Card('HEARTS', 5, hearts5),
    new Card('HEARTS', 6, hearts6),
    new Card('HEARTS', 7, hearts7),
    new Card('HEARTS', 8, hearts8),
    new Card('HEARTS', 9, hearts9),
    new Card('HEARTS', 10, hearts10),
    new Card('HEARTS', 11, heartsJack),
    new Card('HEARTS', 12, heartsQueen),
    new Card('HEARTS', 13, heartsKing),
  ];
  console.log(deck);
  return (
    <div onClick={() => shuffleDeck(deck)}>
      <img src={deck[0].image}/>
    </div>
  );
}
  

/**
 * Randomly shuffles a given deck.
 * @param {*} deck Deck of cards to be shuffled.
 * @returns Shuffled deck.
 */
export function shuffleDeck(deck: Card[]) {
  for (let i = deck.length - 1; i > 0; i--) {
    let swapped = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[swapped];
    deck[swapped] = temp;
  }
  console.log(deck);
  return deck;
}

/*
  UPON GAME START:
    Cards are shuffled
    Cards are distributed on tableau
      Topmost card of each tableau pile is put face-up
    
*/

// TRYING TO FIND AN EASIER/CLEANER WAY TO DO THIS
// const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
// const colors = ['black', 'red', 'black', 'red'];
// const values = [
//   'Ace',
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   'Jack',
//   'Queen',
//   'King'
// ];
// let cardDeck = [];

// for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
//   for (let valueIndex = 1; valueIndex <= values.length; valueIndex++) {
//     cardDeck.push(Card(
//       suits[suitIndex],
//       colors[suitIndex],
//       valueIndex,
      
//     ))
//   }
// }