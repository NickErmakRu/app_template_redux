import React from "react";
import BookList from "../bookList";

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: "Гарри Поттер и Узник Азкабана",
    },
    {
      id: 2,
      title: "Гарри Поттер и Кубок Огня",
    },
  ];

  return <BookList books={books} />;
};

export default HomePage;
