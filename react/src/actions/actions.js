export const UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING';
export const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING';
export const SET_IMAGES = 'SET_IMAGES';
export const LOAD_MORE_IMAGES = 'LOAD_MORE_IMAGES';

export const updateSearchString = (searchString) => ({
  type: UPDATE_SEARCH_STRING,
  searchString,
});

export const updateIsLoading = (bool) => ({
  type: UPDATE_IS_LOADING,
  bool,
});

export const setImages = (images) => ({
  type: SET_IMAGES,
  images
});

export const loadMoreImages = (images) => ({
  type: LOAD_MORE_IMAGES,
  images
});
