import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Book from './Book';

describe('Book component', () => {
  it('renders the book cover image immediately', () => {
    const book = {
      id: 1,
      title: 'Test Book',
      url: '/test-cover.png',
      originalPrice: 20,
      salePrice: 10,
      rating: 5,
    };

    render(
      <MemoryRouter>
        <Book book={book} />
      </MemoryRouter>
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/test-cover.png');
  });
});
