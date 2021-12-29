export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Гарри Поттер и Узник Азкабана",
      price: 890,
      coverImage:
        "https://cdn.ananasposter.ru/image/cache/catalog/poster/film/85/8463-1000x830.jpg",
    },
    {
      id: 2,
      title: "Гарри Поттер и Кубок Огня",
      price: 900,
      coverImage:
        "https://media.kg-portal.ru/movies/s/scottpilgrimvstheworld/posters/scottpilgrimvstheworld_10.jpg",
    },
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });
  }
}
