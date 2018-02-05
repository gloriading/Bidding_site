import React, { Component } from 'react';
import {AuctionShowPage} from './AuctionShowPage';
import {AuctionIndexPage} from './AuctionIndexPage';
import {CurrentDateTime} from './CurrentDateTime';

function App () {
  return (
    <div className="App">
      <CurrentDateTime />
      <AuctionIndexPage />
      <AuctionShowPage />
    </div>
  );
}

export default App;
