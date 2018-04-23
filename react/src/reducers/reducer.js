import merge from 'lodash/merge';
import { UPDATE_SEARCH_STRING, UPDATE_IS_LOADING, RECEIVE_ITEMS, RECEIVE_ITEM, TOGGLE_FAVORITE } from '../actions/actions.js';

const initialState = {
  searchString: '',
  isLoading: false,
  pageNumber: 0,
  items: [],
  item: [],
  favorites: [],
}

const cachedFavorites = localStorage.getItem('favorites');
if (cachedFavorites) {
  initialState.favorites =  JSON.parse(cachedFavorites);
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_STRING:
      return merge({}, state, { searchString: action.searchString });
    case UPDATE_IS_LOADING:
      return merge({}, state, { isLoading: action.isLoading });
    case TOGGLE_FAVORITE:
      let oldFavorites = Array.from(state.favorites);
      if (oldFavorites.includes(action.itemId)) {
        let index = oldFavorites.indexOf(action.itemId);
        oldFavorites.splice(index, 1);
      } else {
        oldFavorites.push(action.itemId);
      }
      localStorage.setItem('favorites', JSON.stringify(oldFavorites));
      return merge({}, state, {favorites: oldFavorites});
    case RECEIVE_ITEMS:
      return merge({}, state, { pageNumber: (state.pageNumber + 1), items: state.items.concat(action.items.items) });
    case RECEIVE_ITEM:
      return merge({}, state, { item: action.item });
    default:
      return state;
  }
}

export default Reducer;
