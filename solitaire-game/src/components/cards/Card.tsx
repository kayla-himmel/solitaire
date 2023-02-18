import { CardProps } from './Card.interfaces';

export class Card implements CardProps {
  suit: string;
  color: string;
  value: number;
  image: string;
  faceUp = false;

  constructor(suit: string, value: number, image: string, faceUp?: boolean) {
    this.suit = suit;
    this.color = suit === 'DIAMONDS' || suit === 'HEARTS' ? 'RED' : 'BLACK';
    this.value = value;
    this.image = image;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    faceUp = faceUp ? faceUp : false;
  }
}
