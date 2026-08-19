export interface IQuestion {
  id: number;
  title: string;
  shortAnswer: string;
  rating: number;
  difficulty: number;
  size: 'lg' | 'md' | 'sm';
}
