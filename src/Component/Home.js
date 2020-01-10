import React from 'react';
import './App.css';


function Home() {
  return (
    <div className="Home">
     <h1>Choose between the Bullish stocks, Bearish stocks, or Indexes</h1>
     <a href="./StockWinners">
         <img alt="Bull" src="/Bull.jpeg"
         ></img></a>
     <a href="./StockLosers">
         <img alt="Bear" src="/bear.jpeg"
         ></img></a><br></br>
      <a href="./MajorIndexes">
         <img alt="Indexes" src="/indexes.jpeg"
         ></img></a>
    </div>
  );
}

export default Home;
