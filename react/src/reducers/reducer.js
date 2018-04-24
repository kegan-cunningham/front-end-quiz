import merge from 'lodash/merge';
import { UPDATE_IS_LOADING, RECEIVE_ITEMS, RECEIVE_ITEM, TOGGLE_FAVORITE } from '../actions/actions.js';

const initialState = {
  isLoading: false,
  pageNumber: 0,
  items: [],
  item: [],
}

const Reducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case UPDATE_IS_LOADING:
      return merge({}, state, { isLoading: action.bool });
    case TOGGLE_FAVORITE:
      let toggled = (localStorage.getItem(action.itemId) === 0) ? 1 : 0;
      localStorage.setItem(action.itemId, toggled);
      return state;
    case RECEIVE_ITEMS:
      return merge({}, state, { isLoading: false, pageNumber: (state.pageNumber + 1), items: state.items.concat(action.items.items) });
    case RECEIVE_ITEM:
      return merge({}, state, { item: action.item });
    default:
      return state;
  }
}

export default Reducer;
