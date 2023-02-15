import React, {Children} from 'react'
import { TableauProps } from './Tableau.interfaces'

export const Tableau: React.FC<TableauProps> = ({
  children,
}) => {
  // create the 7 tableau piles (the main stacks of the game board)
  // const tableauPile () => {
  //   const parent = document.getElementById('tableauParent');
  //   const pileSpot = document.createElement('div');
  //   const arrayChildren = Children.toArray(children);

  //   create piles
  //   for (let i = 0; i <= 7; i++) {
  //     pileSpot.setAttribute('id', `tableauSpot-${i}`);

  //     // append the piles to the parent div
  //     if (parent) {
  //       parent.append(pileSpot)
  //     } else {
  //       const newParent = document.createElement('div');
  //       newParent.append(pileSpot)
  //     }
      
  //   //   // Children.map(arrayChildren, (child, index) => {
  //   //   //   const pileChild = index === arrayChildren.length;

  //   //   //   const pileSpotId = pileSpot.id.split('-');

  //   //   //   if (pileSpot.getAttribute('id', `tableauSpot-${i}`))
  //   // }

  //   tableauPile();
  // }

  // TO-DO: Swap divs out with Pile component once those are made
  return (
    <div id='tableauParent'>
      <div id="tableau-0"></div>
      <div id="tableau-1"></div>
      <div id="tableau-2"></div>
      <div id="tableau-3"></div>
      <div id="tableau-4"></div>
      <div id="tableau-5"></div>
      <div id="tableau-6"></div>
    </div>
  )
};
