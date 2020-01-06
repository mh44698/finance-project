import React, { useState, useEffect } from 'react';



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
     {items.map(item => (
        <h1>
        {item.date} {item.open} {item.close} 
        </h1>
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
     ))}
    </div>
  );
}

export default StockDetail;