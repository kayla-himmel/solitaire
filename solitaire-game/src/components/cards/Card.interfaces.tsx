export interface CardProps {
  suit: string;
  color?: string;
  value: number;
  cardFront: string;
  key: string;
  faceUp?: boolean;
}