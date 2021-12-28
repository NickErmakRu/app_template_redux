import React from "react";
import "./bookListItem.scss";

const BookListItem = ({ book }) => {
  const { title, price, coverImage } = book;
  return (
    <div className="bookListItem">
      <div className="bookCover">
        <img src={coverImage} alt="coverImage" />
      </div>
      <div className="bookDetails">
        <a href="#" className="bookTitle">
          {title}
        </a>
        <div className="bookPrice">{price}</div>
      </div>
    </div>
  );
};

export default BookListItem;
