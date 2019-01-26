import { ACTIONS } from "./books-actions";

const initialState = {
  books: []
};

export default function(state = initialState, action) {
  if (action.type === ACTIONS.BOOKS_LOADED) {
    return { ...state, books: action.payload };
  }
  return state;
}
