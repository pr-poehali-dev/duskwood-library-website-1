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
      "https://i.pinimg.com/736x/09/b8/dd/09b8dd289144f54e863e0928f615fc1f.jpg",
    link: "https://interactive-book-vendetta--preview.poehali.dev/",
    type: "book",
  },
  {
    id: 2,
    title: "Сад и огород 101 совет",
    author: "Катрин Освальд",
    image:
      "https://i.pinimg.com/736x/0d/b5/47/0db547fd818f4680cfacfb65534d69bb.jpg",
    type: "book",
  },
  {
    id: 3,
    title: "Архитектура Дасквуда",
    author: "Сэмюэль Р.",
    image:
      "https://i.pinimg.com/736x/1a/10/49/1a10499bcf41685218b149b19538a5a2.jpg",
    type: "book",
  },
  {
    id: 4,
    title: "Чума в Дасквуде",
    author: "Карстен Джерико",
    image:
      "https://i.pinimg.com/736x/00/a0/21/00a02143c4dca82ebfa829a3cea44c1f.jpg",
    type: "book",
  },
  {
    id: 5,
    title: "Полночь в Дасквуде",
    author: "С. Куин",
    image:
      "https://i.pinimg.com/736x/52/79/08/5279085d8852503a31fb3640de695aa8.jpg",
    type: "book",
  },
  {
    id: 6,
    title: "Флора и Фауна",
    author: "Адам П.",
    image:
      "https://i.pinimg.com/736x/15/e9/6c/15e96ce334c761bdaf7b995e1936e084.jpg",
    type: "book",
  },
  {
    id: 7,
    title: "Мертвый город",
    author: "Интерактивная игра",
    image:
      "https://everbytestudio.com/wp-content/uploads/2018/11/Text-Adventure-Dead-City-Android-iOS.jpg",
    type: "game",
  },
  {
    id: 8,
    title: "Moonvale",
    author: "Игровой мир",
    image:
      "https://everbytestudio.com/wp-content/uploads/2023/05/MOONVALE-Web-Selection-Button.jpg",
    type: "game",
  },
];
