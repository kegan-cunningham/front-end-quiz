import React from 'react';
import { Link } from 'react-router-dom';

const ItemsPage = props => {
  const { isLoading } = props;
  // const { fetchItems, favorites, favoriteToggle } = props;
  const { fetchItems } = props;
  const { pageNumber } = props;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="items-page">
      <h3 className="browse-header">Browse Page</h3>
      <div className="items-container">
        <Item items={props.items}/>
      </div>
      <div className="load-button">
        <LoadButton
          // fetchLimitReached={fetchLimitReached}
          fetchItems={fetchItems}
          pageNumber={pageNumber}
        />
      </div>
    </div>
  );
}

const Item = props => {
  const items = props.items || []
  if (items == undefined){
    return items;
  }
  console.log(items)
  return items.map(item => {
    return (
      <div
        className="browse-item"
        key={parseInt(item.integerId, 10)}
      >
        <Link to={`/item/${item.integerId}`} className="browse-item-body">
          <img
            className="item-img-top"
            src={item.image}
            alt={item.description}
          />
          <p className="price">{item.price === null ? 'Price upon request' : item.price.amounts.USD}</p>
        </Link>
        {/* <Favorite
          class="item-footer"
          favorites={props.favorites}
          toggleFavorite={props.toggleFavorite}
          id={item.integerId}
        /> */}
      </div>
    );
  });
};

const LoadButton = props => {
  return (
    <button
      className="load-more-button"
      onClick={() => (props.fetchItems(props.pageNumber))}
      // disabled={props.fetchLimitReached}
    >
      LOAD MORE
    </button>
  )
};

export default ItemsPage;
