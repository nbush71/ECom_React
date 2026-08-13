import React from 'react';
import CheapestBooks from './CheapestBooks.jsx';
import BestBooks from './ui/BestBooks.jsx';


const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <BestBooks />
          <CheapestBooks />
        </div>
      </div>
    </section>
  );
};

export default Featured;
