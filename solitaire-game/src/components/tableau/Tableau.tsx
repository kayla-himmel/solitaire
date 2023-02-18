import React from 'react';
import { Pile } from '../piles/Pile';
import { TableauProps } from './Tableau.interfaces';
import './Tableau.scss';

export const Tableau: React.FC<TableauProps> = () => {
  // create the 7 tableau columns (the main stacks of the game board that house the piles of cards)
  const createTableauColumns = () => {
    const parent = document.getElementById('tableauParent');
    const tableauColumns = document.createElement('div');

    // create Columns
    for (let i = 0; i < 7; i++) {
      tableauColumns.setAttribute('id', `tableauColumns-${i}`);
      tableauColumns.setAttribute('class', 'tableauColumns');

      // append the Columns to the parent div
      if (parent) {
        parent.append(tableauColumns);
      } else {
        const newParent = document.createElement('div');
        newParent.append(tableauColumns);
      }
    }
  };

  createTableauColumns();

  return <div id="tableauParent"></div>;
};
