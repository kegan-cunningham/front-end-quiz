import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ItemList from "./pages/ItemList";
import ItemPage from "./pages/ItemPage";
import store from "./store";

class App extends React.Component
{
  render()
  {
    return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ItemList} />
            <Route path="/item/:id" component={ItemPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
