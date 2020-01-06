import React, { useState, useEffect } from 'react';



function StockDetail() {
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
      {/* <h1>{items.mostGainerStock}</h1>  */}
     {items.map(item => (
        <h1 key={item.tickerid}>{item.ticker}</h1>
     ))}
    </div>
  );
}

export default StockDetail;