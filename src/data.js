import atomicHabits from './assets/atomic habits.jpg';
import bookOne from './assets/book-1.jpeg';
import bookTwo from './assets/book-2.jpeg';
import bookThree from './assets/book-3.jpeg';
import bookFour from './assets/book-4.jpeg';
import bookFive from './assets/book-5.jpeg';
import bookSix from './assets/book-6.jpeg';
import bookSeven from './assets/book-7.jpg';
import bookEight from './assets/book-8.jpeg';
import crackTheCodingInterview from './assets/crack the coding interview.png';
import davidGoggins from './assets/david goggins.jpeg';
import deepWork from './assets/deep work.jpeg';

// FAKE DATA
export const books = [
  {
    id: 1,
    title: "Crack the Coding Interview",
    url: crackTheCodingInterview,
    originalPrice: 49.95,
    salePrice: 14.95,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Atomic Habits",
    url: atomicHabits,
    originalPrice: 39,
    salePrice: null,
    rating: 5,
  },
  {
    id: 3,
    title: "Can't Hurt Me",
    url: davidGoggins,
    originalPrice: 29,
    salePrice: null,
    rating: 5,
  },
  {
    id: 4,
    title: "Deep Work",
    url: deepWork,
    originalPrice: 44,
    salePrice: 19,
    rating: 4.5,
  },
  {
    id: 5,
    title: "The 10X Rule",
    url: bookOne,
    originalPrice: 32,
    salePrice: null,
    rating: 5,
  },
  {
    id: 6,
    title: "Sell Or Be Sold",
    url: bookTwo,
    originalPrice: 70,
    salePrice: 12.5,
    rating: 5,
  },
  {
    id: 7,
    title: "Rich Dad Poor Dad",
    url: bookThree,
    originalPrice: 11,
    salePrice: 10,
    rating: 4,
  },
  {
    id: 8,
    title: "Cashflow Quadrant",
    url: bookFour,
    originalPrice: 38,
    salePrice: 17.95,
    rating: 4.5,
  },
  {
    id: 9,
    title: "48 Laws of Power Summary",
    url: bookFive,
    originalPrice: 35,
    salePrice: 19.95,
    rating: 4.5,
  },
  {
    id: 10,
    title: "The 5 Second Rule",
    url: bookSix,
    originalPrice: 40,
    salePrice: null,
    rating: 5,
  },
  {
    id: 11,
    title: "How to Win Friends & Influence People",
    url: bookSeven,
    originalPrice: 30,
    salePrice: 20,
    rating: 5,
  },
  {
    id: 12,
    title: "Mastery",
    url: bookEight,
    originalPrice: 30,
    salePrice: 12.95,
    rating: 4.5,
  },
];