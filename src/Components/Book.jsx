import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Price from './ui/Price';
import Ratings from './ui/Ratings';

const Book = ({ book }) => {
  const [setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };

    return () => {
      //When the component unmounts
      mountedRef.current = false;
    };
  })

  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img className="book__img" src={book.url} alt={book.title} />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Ratings rating={book.rating} />
      <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
    </div>
  );
};

export default Book;
