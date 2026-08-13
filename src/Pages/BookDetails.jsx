import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Ratings from '../Components/ui/Ratings';
import Price from '../Components/ui/Price';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Book from '../Components/Book';

const BookDetails = ({ books, cart = [], addToCart }) => {
  const { id } = useParams();
  const book = books.find((item) => item.id === Number(id));

  function addBookToCart(bookToAdd) {
    addToCart(bookToAdd);
  }

  function bookExistsOnCart() {
    return cart.some((cartBook) => cartBook.id === +id);
  }

  if (!book) {
    return (
      <main className="container__book--selected">
        <p>Book not found.</p>
        <Link to="/books">Back to books</Link>
      </main>
    );
  }

  return (
    <main className="container__book--selected">
      <div className="book__selected">
       <figure className="book__selected--figure">
                <img className="book__selected--img" src={book.url} alt={book.title} />
              </figure>
              <div className="book__selected--description">
                <div className="book__selected--top">
                  <Link to="/books" className="book__selected--link">
                    <FontAwesomeIcon icon="arrow-left" /> Back
                  </Link>
                </div>
                <h2 className="book__selected--title">{book.title}</h2>
                <div className="book__summary">
                  <h3 className="book__summary--title">Description</h3>
                  <p className="book__summary--para">A detailed description will be added here soon.</p>
                </div>
                <Ratings rating={book.rating} />
                <div className="book__price">
                  <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                </div>
                {bookExistsOnCart() ? (
                <Link to={`/cart`} className="book__link">
                <button className="btn">Checkout</button>
                </Link>
                ):(
                <button className="btn" onClick={() => addBookToCart(book)}>
                  Add to cart
                </button>)}
              </div>
            </div>
            <div className="books__container">
                <div className="row">
                  <div className="book__selected--top">
                    <h2 className="book__selected--title--top">
                      Recommended Books</h2>                  
                  </div>
                  <div className="books">
                      {books
                      .filter((book) => book.rating === 5 && +book.id !== +id)
                      .slice(0,4)
                      .map(book => <Book book={book} key={book.id} />)
                      }
                      </div>
                </div>
            </div>
        </main>
  );
};

export default BookDetails;
