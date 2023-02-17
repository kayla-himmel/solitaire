import { Card } from "../components/cards/Card";
import { CardProps } from "../components/cards/Card.interfaces";
import CardData from "../data/CardData.json";

export const DeckObject = () => {
  const initialDeck: CardProps[] = CardData as CardProps[];

  console.log(initialDeck);
  //buildDeck(initialDeck);
  shuffleDeck(initialDeck);

  return (
    <div>
      {initialDeck.map((newCard) => (
        <Card
          suit={newCard.suit}
          cardFront={newCard.cardFront}
          value={newCard.value}
          color={newCard.color}
          key={newCard.key}
        />
      ))}
    </div>
  );
};

// in this file, import the JSON object from the new deck file
// possibly use {...props} instead of call out each one individually
function buildDeck(deck: CardProps[]) {
  deck.map((newCard) => (
    <Card
      suit={newCard.suit}
      cardFront={newCard.cardFront}
      value={newCard.value}
      color={newCard.color}
      key={newCard.key}
    />
  ));
}

/**
 * Randomly shuffles a given deck.
 * @param {*} deck Deck of cards to be shuffled.
 * @returns Shuffled deck.
 */
export function shuffleDeck(deck: CardProps[]) {
  for (let i = deck.length - 1; i > 0; i--) {
    let swapped = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[swapped];
    deck[swapped] = temp;
  }
  return deck;
}
