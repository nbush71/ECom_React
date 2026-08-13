import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from './Cart';

describe('Cart component', () => {
  it('shows the empty cart illustration when the cart is empty', () => {
    render(
      <MemoryRouter>
        <Cart cart={[]} changeQuantity={() => {}} removeItem={() => {}} />
      </MemoryRouter>
    );

    const image = document.querySelector('img[src*="empty_cart"]');
    expect(image).not.toBeNull();
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });
});
