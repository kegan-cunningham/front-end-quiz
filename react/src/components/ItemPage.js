import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemPage extends Component {

  componentDidMount() {
    this.props.fetchItem(this.props.match.params.id)
  }

  render() {
    return (
      <div className="item-page">
        <h3 className="browse-header">
          <Link to={`/`} className="browse-item-body">&lt; Back</Link>
          {this.props.item.seller ? this.props.item.seller.company : 'Item Page'}
        </h3>
        <div className="item-container">
          <Item item={this.props.item}/>
        </div>
      </div>
    );
  }
}

const Item = props => {
  const item = props.item || []
  console.log(item);
  const measurements = item.measurements
  if (measurements == undefined){
    return null;
  }
  return (
    <div
      className="item"
      key={parseInt(item.integerId, 10)}
    >
      <section className="item-body">
        <img
          className="item-img-top"
          src={item.image}
          alt={item.description}
        />
        <section className="item-right">
          <aside className="desc-top">
            <h2 className="title">{item.title}</h2>
            <p className="item-price">{item.price == null ? 'Price upon request' : item.price.amounts.USD}</p>
            <p> Measurements:</p>
            <p className="item-measurements">
              H: {item.measurements.height} in.
              W: {item.measurements.width} in.
              D: {item.measurements.depth} in.

            </p>
          </aside>
          <div className="item-buttons">
            <button>PURCHASE</button>
            <button>MAKE OFFER</button>
          </div>
          <aside className="desc-bottom">
            <p className="item-desc">{item.description}</p>
            <p className="item-creators">Creator: {item.creators}</p>
          </aside>
        </section>
      </section>
    </div>
  );
};

export default ItemPage;
