import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemsPage from '../components/ItemsPage';
import { fetchItems, toggleFavorite } from '../actions/actions';
import '../styles/styles.css';

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading || false,
    pageNumber: state.pageNumber || 0,
    searchString: state.searchString || '',
    items: state.items || [],
    favorites: state.favorites || [],
  };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: pageNumber => dispatch(fetchItems(pageNumber)),
        toggleFavorite: id => dispatch(toggleFavorite(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ItemsPage
);
