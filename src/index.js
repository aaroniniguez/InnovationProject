import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import App from "./App"
import {Card} from "./components/Card"
import NotFound from "./components/Pages/NotFound"
import Page from "./components/Router/Page"
ReactDOM.render(
        <BrowserRouter>
          <Switch>
                <Route exact path = "/innovation/cards">
                    <App/>
                </Route>
                <Route path='/innovation/cards/:cardName'>
                    <Card/>
                </Route>
                <Route path="*">
                    <NotFound homePage="/innovation/cards" />
                </Route>
            </Switch>
        </BrowserRouter>,
    document.getElementById('root')
  );