import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ItemsPage from "./containers/ItemsPageContainer";
import ItemPage from "./containers/ItemPageContainer";
import Store from "./store/store";
const store = Store();

class AppRouter extends React.Component
{
  render()
  {
    return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ItemsPage} />
            <Route path="/item/:id" component={ItemPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById("root"));
