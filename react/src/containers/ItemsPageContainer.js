import { connect } from 'react-redux';
import ItemsPage from '../components/ItemsPage';
import { fetchItems, toggleFavorite, updateIsLoading } from '../actions/actions';
import '../styles/styles.css';

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading || false,
    pageNumber: state.pageNumber || 0,
    items: state.items || [],
  };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: pageNumber => dispatch(fetchItems(pageNumber)),
        toggleFavorite: id => dispatch(toggleFavorite(id)),
        updateIsLoading: bool => dispatch(updateIsLoading(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ItemsPage
);
