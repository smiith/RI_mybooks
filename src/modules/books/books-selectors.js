import _ from 'lodash';

export const getBooksOnShelfs = state => state.books;
export const getCurrentlyReadingBooks = state => _.filter(getBooksOnShelfs(state), ['shelf', 'currentlyReading']);
export const getWantToReadBooks = state => _.filter(getBooksOnShelfs(state), ['shelf', 'wantToRead']);
export const getReadBooks = state => _.filter(getBooksOnShelfs(state), ['shelf', 'read']);
