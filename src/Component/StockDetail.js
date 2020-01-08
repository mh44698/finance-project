import React, { useState, useEffect } from 'react';
import './App.css';



function StockDetail({ match }) {
  useEffect(() => {
    fetchItem();
    // console.log(match)
    // console.log(match.params.ticker)
  },[]
  );
   const [item, setItem] = useState([]);
  
  const fetchItem = async () => {
    const data = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/${match.params.ticker}`
    );
    const item = await data.json();
    console.log(match.params.ticker)
    setItem(item.historical.reverse());
    
    // const symbol = await data.json();
    // console.log(symbol.symbol)
    // setItem(symbol.symbol)
  }
  return (
    <div>
      Stock {match.params.ticker}

      <table align="left" className="StockDetail">
        <thead>
        <tr>
        <th className="table-header">Date</th>
        <th className="table-header">Open</th>
        <th className="table-header">High</th>
        <th className="table-header">Low</th>
        <th className="table-header">Close</th>
        </tr>
        </thead>
        <tbody>
     {item.map(item => (
        <tr key={item.date}>
        <th>{item.date}</th>
        <th>{item.open}</th>
        <th>{item.high}</th>
        <th>{item.low}</th>
        <th>{item.close}</th>
        </tr>
     ))}
     </tbody>
     </table>
    </div>
  );
}

export default StockDetail;

// date: "2015-01-06"
// open: 106.54
// high: 107.43
// low: 104.63
// close: 106.26
// volume: 65797100
// unadjustedVolume: 65797100
// change: 0.28
// changePercent: 0.263
// vwap: 106.10667
// label: "January 06, 15"
// changeOverTime: 0.00263