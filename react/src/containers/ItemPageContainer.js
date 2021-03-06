import { connect } from 'react-redux';
import ItemPage from '../components/ItemPage';
import { fetchItem, toggleFavorite } from '../actions/actions';
import '../styles/styles.css';

function mapStateToProps(state, ownProps) {
  const item = state.item
  return {
    item: item || [],
  };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItem: id => dispatch(fetchItem(id)),
        toggleFavorite: id => dispatch(toggleFavorite(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ItemPage
);
