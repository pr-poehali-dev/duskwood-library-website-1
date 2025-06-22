export interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  link?: string;
  type: "book" | "game";
}

export const books: Book[] = [
  {
    id: 1,
    title: "Interactive Book",
    author: "Vendetta",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
    link: "https://vendetta-game.com",
    type: "book",
  },
  {
    id: 2,
    title: "Сад и огород 101 совет",
    author: "Катрин Освальд",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=400&fit=crop",
    type: "book",
  },
  {
    id: 3,
    title: "Архитектура Дасквуда",
    author: "Сэмюэль Р.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    type: "book",
  },
  {
    id: 4,
    title: "Чума в Дасквуде",
    author: "Карстен Джерико",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    type: "book",
  },
  {
    id: 5,
    title: "Полночь в Дасквуде",
    author: "С. Куин",
    image:
      "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=300&h=400&fit=crop",
    type: "book",
  },
  {
    id: 6,
    title: "Флора и Фауна",
    author: "Адам П.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop",
    type: "book",
  },
  {
    id: 7,
    title: "Мертвый город",
    author: "Интерактивная игра",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300&h=400&fit=crop",
    type: "game",
  },
  {
    id: 8,
    title: "Moonvale",
    author: "Игровой мир",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
    type: "game",
  },
];
