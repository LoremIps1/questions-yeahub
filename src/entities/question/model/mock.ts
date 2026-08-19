import type { IQuestion } from './types';

export const questionsMock: IQuestion[] = [
  {
    id: 1,
    title: 'Что такое Virtual DOM?',
    shortAnswer: 'Virtual DOM — это легковесное представление реального DOM в памяти.',
    rating: 4,
    difficulty: 7,
  },
  {
    id: 2,
    title: 'Что такое JSX?',
    shortAnswer: 'JSX — это синтаксическое расширение JavaScript для описания интерфейса.',
    rating: 5,
    difficulty: 4,
  },
  {
    id: 3,
    title: 'Что такое замыкание?',
    shortAnswer: 'Замыкание позволяет функции сохранять доступ к своему лексическому окружению.',
    rating: 5,
    difficulty: 8,
  },
];
