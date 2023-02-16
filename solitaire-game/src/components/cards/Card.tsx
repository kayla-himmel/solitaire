import React, { FC, ReactElement } from 'react';
import {CardProps} from "./Card.interfaces";

export const Card: FC<CardProps> = ({
  suit, 
  color, 
  value, 
  image, 
  faceUp=false,
  ...props
}): ReactElement => {

  color = suit === "DIAMONDS" || suit === "HEARTS" ? "RED" : "BLACK";
  // either figure out a way to get image here or just bring it in from the deck/pile
  return (
    <div className="card" {...props}>
      <img src={image} alt={`${value} of ${suit}`}></img>
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