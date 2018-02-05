import React, { Component } from 'react';
import {AuctionShowPage} from './AuctionShowPage';
import {AuctionIndexPage} from './AuctionIndexPage';
import {AuctionNewPage} from './AuctionNewPage';
import {NavBar} from './NavBar';
import {
 BrowserRouter as Router,
 Route,
 Switch
} from 'react-router-dom';

function App () {
  return (
    <Router >
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/auctions" exact component={AuctionIndexPage} />
          <Route path="/auctions/new" component={AuctionNewPage} />
          <Route path="/auctions/:id" component={AuctionShowPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
