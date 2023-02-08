import React from 'react'

enum numberOfCards {
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7'
}

// enum pile
export interface TableauProps {
  pileLocation: string;
  // totalDealtCards: numberOfCards; // move to deal functionality
  faceUpCard: string; // move this to the pile component once that's made
}
// think of tableau piles as containers (not the piles)
// make piles actual columns so dragging the card anywhere in that column allows it to move there