import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import App from "./App"
import {Card} from "./components/Card"
ReactDOM.render(
        <BrowserRouter>
          <Switch>
                <Route exact path = "/innovation">
                    <App/>
                </Route>
                <Route path="/innovation/cards/:cardName">
                    <Card/>
                </Route>
            </Switch>
        </BrowserRouter>,
    document.getElementById('root')
  );
  