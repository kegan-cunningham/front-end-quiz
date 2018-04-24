import merge from 'lodash/merge';
import { UPDATE_SEARCH_STRING, UPDATE_IS_LOADING, RECEIVE_ITEMS, RECEIVE_ITEM, TOGGLE_FAVORITE } from '../actions/actions.js';

const initialState = {
  searchString: '',
  isLoading: false,
  pageNumber: 0,
  items: [],
  item: [],
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_STRING:
      return merge({}, state, { searchString: action.searchString });
    case UPDATE_IS_LOADING:
      return merge({}, state, { isLoading: action.isLoading });
    case TOGGLE_FAVORITE:
      let toggled = (localStorage.getItem(action.itemId) == 0) ? 1 : 0;
      localStorage.setItem(action.itemId, toggled);
      return state;
    case RECEIVE_ITEMS:
      return merge({}, state, { pageNumber: (state.pageNumber + 1), items: state.items.concat(action.items.items) });
    case RECEIVE_ITEM:
      return merge({}, state, { item: action.item });
    default:
      return state;
  }
}

export default Reducer;
