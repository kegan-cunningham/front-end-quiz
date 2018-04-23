import * as APIUtil from '../util/ItemsUtil';

export const UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING';
export const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const FETCH_ITEMS = 'FETCH_ITEMS'
export const FETCH_ITEM = 'FETCH_ITEM'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const RECEIVE_ITEM = 'RECEIVE_ITEM'

export const updateSearchString = (searchString) => ({
  type: UPDATE_SEARCH_STRING,
  searchString,
});

export const updateIsLoading = (bool) => ({
  type: UPDATE_IS_LOADING,
  bool,
});

export function toggleFavorite(id) {
  return {
    type: TOGGLE_FAVORITE,
    itemId: id
  };
}

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items,
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item,
});

export const fetchItems = (pageNumber) => dispatch => (
  APIUtil.fetchItems(pageNumber).then(items => (
    dispatch(receiveItems(items))
  ))
);

export const fetchItem = id => dispatch => (
  APIUtil.fetchItem(id).then(item => (
    dispatch(receiveItem(item))
  ))
);
