import React, { useState, useEffect } from 'react';



function StockWinners() {
  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://financialmodelingprep.com/api/v3/stock/gainers'
    );
    const items = await data.json();
    console.log(items.mostGainerStock)
    setItems(items.mostGainerStock);
  }
  return (
    <div>
     {items.map(item => (
        <h1>
        {item.ticker} - {item.companyName}<br></br>
        Price ${item.price}<br></br>
        Changes ${item.changes}
        </h1>
        
     ))}
    </div>
  );
}

export default StockWinners;