import {CardProps} from "./Card.interfaces";

export class Card implements CardProps {
  suit: string;
  color: string;
  value: number;
  image: string;
  faceUp: boolean = false;

  constructor(
    suit: string,
    value: number,
    image: string,
    faceUp?: boolean
  ) {
    this.suit = suit;
    this.color = suit === "DIAMONDS" || suit === "HEARTS" ? "RED" : "BLACK";
    this.value = value;
    this.image = image;
    faceUp = faceUp ? faceUp : false;
  }
}