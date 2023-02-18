import React from 'react';
import { PileProps } from './Pile.interfaces';
import './Pile.scss';

export const Pile: React.FC<PileProps> = ({ children }) => {
  return <div className="pile">{children}</div>;
};
