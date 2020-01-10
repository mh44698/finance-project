import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


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
    setItems(items.mostGainerStock);
  }
  return (
    <div className="financial-winner">
      <table align="center" className="financial-winner-table">
        <thead>
        <tr>
        <th className="table-header">Symbol</th>
        <th className="table-header">CompanyName</th>
        <th className="table-header">Price</th>
        <th className="table-header">Change</th>
        </tr>
        </thead>
        <tbody>
     {items.map(item => (
        <tr key={item.ticker}>
        <td className="table-cell"><Link to={`/StockDetail/${item.ticker}`}>{item.ticker}</Link></td>
        <td className="table-cell">{item.companyName}</td>
        <td className="table-cell">$ {item.price}</td>
        <td className="financial-winner-table-change table-cell">$ {item.changes}</td>
        </tr>
     ))}
     </tbody>
     </table>
    </div>
  );
}

export default StockWinners;