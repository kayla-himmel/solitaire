import React, { FC, ReactElement } from 'react';
import {CardProps} from "./Card.interfaces";
import useImage from '../../hooks/useImage';

export const Card: FC<CardProps> = ({
  suit, 
  color, 
  value, 
  cardFront, 
  faceUp=false,
  key,
  ...props
}): ReactElement => {

  //https://stackoverflow.com/questions/53775936/import-image-dynamically-in-react-component
  // need to configure this properly now that i know it works
  const { loading, error, image } = useImage(cardFront);

  color = suit === "DIAMONDS" || suit === "HEARTS" ? "RED" : "BLACK";
  // either figure out a way to get image here or just bring it in from the deck/pile
  return (
    <div className="card" {...props}>
      { loading ? (
        <p>oops</p>
      ) : (
        <img src={image} id={key} alt={`${value} of ${suit}`} height="200"/>
      )}
    </div>
  );
}