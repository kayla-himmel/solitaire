import React from 'react'
import { TableauProps } from './Tableau.interfaces'

export const Tableau = ({
  pileLocation,
  faceUpCard
}) => {
  // create the 7 tableau piles (the main stacks of the game board)
  const tableauPile ()) => {
    const parent = document.getElementById('tableauParent');
    const pileSpot = document.createElement('div');
    
    for (let i = 0; i <= 7; i++) {
      pileSpot.setAttribute('id', `tableauSpot-${i}`);
      parent.append(pileSpot)
    }
  }

  return (
    <div id='tableauParent'></div>
  )
}
