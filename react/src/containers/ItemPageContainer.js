import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemPage from '../components/ItemPage';
import { fetchItem, toggleFavorite } from '../actions/actions';
import '../styles/styles.css';

function mapStateToProps(state, ownProps) {
  console.log(state)
  const item = state.item
  return {
    isLoading: state.isLoading || false,
    item: item || [],
    favorites: state.favorites || [],
  };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItem: id => dispatch(fetchItem(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ItemPage
);
