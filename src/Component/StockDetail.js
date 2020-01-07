import React, { useState, useEffect } from 'react';
import './App.css';



function StockDetail() {
  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      'https://financialmodelingprep.com/api/v3/historical-price-full/DE'
    );
    const items = await data.json();
    console.log(items.historical)
    setItems(items.historical);
  }
  return (
    <div>
      Stock DE
      <table>
     {items.map(item => (
        <tr>
        <th>{item.date}</th>
        <th>{item.open}</th>
        <th>{item.high}</th>
        <th>{item.low}</th>
        <th>{item.close}</th>
        </tr>
     ))}
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