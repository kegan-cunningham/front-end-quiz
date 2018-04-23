import $ from "jquery";

export const fetchItems = (pageNumber = 0) => {
  return $.ajax({
    url: `/browse?start=${pageNumber * 9}&limit=${9}`,
    method: 'GET',
  });
};

export const fetchItem = (itemId) => {
  return $.ajax({
    url: `/item/${itemId}`,
    method: 'GET',
  });
};
