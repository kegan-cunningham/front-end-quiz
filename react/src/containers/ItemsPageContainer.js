import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemsPage from '../components/ItemsPage';
import { fetchItems, toggleFavorite } from '../actions/actions';
import '../styles/styles.css';

class ItemsPageContainer extends Component {
  componentDidMount() {
    //To not refetch if data is present.
    if (this.props.items.data === undefined || this.props.items.data.length === 0) {
      this.props.fetchItems();
    }
  }

  render() {
    return (
      <ItemsPage
        items={this.props.items}
        fetchItems={this.props.fetchItems}
        pageNumber={this.props.pageNumber}
        // favorites={this.props.favorites}
        // toggleFavorite={this.props.toggleFavorite}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading || false,
    pageNumber: state.pageNumber || 0,
    searchString: state.searchString || '',
    items: state.items || [],
  };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: pageNumber => dispatch(fetchItems(pageNumber)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ItemsPageContainer
);
