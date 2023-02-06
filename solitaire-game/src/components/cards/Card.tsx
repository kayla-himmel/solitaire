import React from "react";
import {CardProps} from "./Card.interfaces";

export function Card(suit, color, value, image, faceUp=false) {
  this.suit = suit;
  this.color = color;
  this.value = value;
  this.image = image;
  this.faceUp = faceUp;
}

// ADD CARD BACK LATER
// export const Card = ({ 
//   suit,
//   color,
//   value, 
//   image, 
//   faceUp = false }) => {
//   return (
//     <img src={image} />
//   );
// }

// export default function Card(props) {
//   const { suit, color, value, image } = props;
//   let faceUp = false;
//   return [ suit, color, value, image ];
// }