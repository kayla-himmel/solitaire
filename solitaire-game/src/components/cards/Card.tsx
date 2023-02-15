import React, { FC, ReactElement } from 'react';
import {CardProps} from "./Card.interfaces";

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

export const Card: FC<CardProps> = ({
  suit, color, value, image, faceUp=false
}): ReactElement => {

  color = suit === "DIAMONDS" || suit === "HEARTS" ? "RED" : "BLACK";
  // either figure out a way to get image here or just bring it in from the deck/pile
  return (
    <div>
      <img src={image}></img>
    </div>
  );
}

// export class Card implements CardProps {
//   suit: string;
//   color: string;
//   value: number;
//   image: string;
//   faceUp: boolean = false;

//   constructor(
//     suit: string,
//     value: number,
//     image: string,
//     faceUp?: boolean
//   ) {
//     this.suit = suit;
//     this.color = suit === "DIAMONDS" || suit === "HEARTS" ? "RED" : "BLACK";
//     this.value = value;
//     this.image = image;
//     faceUp = faceUp ? faceUp : false;
//   }
// }