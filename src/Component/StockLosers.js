import React, { useState, useEffect } from 'react';
import './App.css';



function StockLosers() {
  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://financialmodelingprep.com/api/v3/stock/losers'
    );
    const items = await data.json();
    console.log(items.mostLoserStock)
    setItems(items.mostLoserStock);
  }
  return (
    <div>
      <table>
     {items.map(item => (
        <tr>
        <th>{item.ticker}</th>
        <th>{item.companyName}</th>
        <th>$ {item.price}</th>
        <th>$ {item.changes}</th>
        </tr>
        
     ))}
      </table>
    </div>
  );
}

export default StockLosers;