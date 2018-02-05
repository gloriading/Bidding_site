import React, { Component } from 'react';
import {AuctionShowPage} from './AuctionShowPage';
import {AuctionIndexPage} from './AuctionIndexPage';

function App () {
  return (
    <div className="App">
      <AuctionIndexPage />
      <AuctionShowPage />
    </div>
  );
}

export default App;
