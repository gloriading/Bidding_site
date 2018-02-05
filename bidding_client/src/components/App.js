import React, { Component } from 'react';
import {AuctionShowPage} from './AuctionShowPage';
import {AuctionIndexPage} from './AuctionIndexPage';
import {NavBar} from './NavBar';
import {
 BrowserRouter as Router,
 Link,
 Route
} from 'react-router-dom';

function App () {
  return (
    <Router >
      <div className="App">
        <NavBar />
        <Route path="/auctions" exact component={AuctionIndexPage} />
        <Route path="/auctions/id" component={AuctionShowPage} />
      </div>
    </Router>
  );
}

export default App;
