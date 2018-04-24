## 1stdibs.com front-end developer candidate quizzes

[React quiz](./react)

[Backbone quiz](./backbone)

Completed React Quiz

Used React to efficiently update components, and Redux to manage state. Used browser local storage to manage favorites.


![Demo](/react/assets/Demo.gif)

In the Items Page Container
```javascript
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
```
In the Items Page Component
```javascript
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
  ```
