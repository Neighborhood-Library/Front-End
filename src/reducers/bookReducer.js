import {
  ADDING_BOOK_FAIL,
  ADDING_BOOK_SUCC,
  CREATE_BOOK,
  DELETE_BOOK,
  FETCH_BOOK
} from '../components/borrowerDashboard/actions';

const initialState = {
  books: [],
  fetchingBooks: false,
  addingBook: false,
  updatingBook: false,
  deletingBook: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOK:
      return {
        ...state,
        error: '',
        addingBook: false
      };
    case CREATE_BOOK:
      return {
        ...state,
        error: '',
        addingBook: true
      };
    case ADDING_BOOK_SUCC:
      return {
        ...state,
        error: '',
        books: action.payload,
        error: null
      };
    case ADDING_BOOK_FAIL:
      return {
        ...state,
        addingBook: false,
        error: action.payload
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };
    default:
      return state;
  }
}
