import { books } from './data';

describe('book image data', () => {
  it('uses bundled local assets for book covers', () => {
    expect(books[0].url).not.toMatch(/^https?:\/\//i);
    expect(books[0].url).toMatch(/\.(png|jpg|jpeg|svg)$/i);
  });
});
