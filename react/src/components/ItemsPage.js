import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
    };
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }

  componentDidMount() {
    if(this.state.fetched === false && this.props.items.length === 0) {
      this.setState({fetched: true})
      this.props.fetchItems();
    }
  }

  handleFavoriteClick(id) {
    return (e) => {
      e.preventDefault();
      this.props.toggleFavorite(id);
      this.setState(this.state);
    };
  }

  render(){
    return (
      <div className="items-page">
        <h3 className="browse-header">Browse Page</h3>
        <div className="items-container">
          <Item
            items={this.props.items}
            favorites={this.state.favorites}
            handleFavoriteClick={this.handleFavoriteClick}
          />
        </div>
        <div className="load-button">
          <LoadButton
            fetchItems={this.props.fetchItems}
            pageNumber={this.props.pageNumber}
            items={this.props.items}
            isLoading={this.props.isLoading}
            updateIsLoading={this.props.updateIsLoading}
          />
        </div>
      </div>
    );
  }
}

const Item = props => {
  const items = props.items || []
  if (items === undefined){
    return [];
  }
  let favorite;
  return items.map(item => {
    if(localStorage.getItem(item.integerId) == 1){
      favorite =  '\u2665';
    } else {
      favorite = '\u2661';
    }
    return (
      <div
        className="browse-item"
        key={parseInt(item.integerId, 10)}
      >
        <Link to={`/item/${item.integerId}`} className="browse-image">
          <img
            className="item-img-top"
            src={item.image}
            alt={item.description}
          />
        </Link>
        <section className="items-bottom">
          <p className="price">
            {item.price === null ? 'Price upon request' : item.price.amounts.USD}
          </p>
          <button
            onClick={props.handleFavoriteClick(item.integerId)}
            className="items-heart"
          >
            {favorite}
          </button>
        </section>
      </div>
    );
  });
};

const LoadButton = props => {
  if (props.items.length > 57 || props.isLoading === true){
    return null;
  }
  const fetch = () => {
    props.updateIsLoading(true);
    props.fetchItems(props.pageNumber);
  }
  return (
    <button
      className="load-more-button"
      onClick={fetch}
    >
      LOAD MORE
    </button>
  )
};

export default ItemsPage;
