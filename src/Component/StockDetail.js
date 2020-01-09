import React, { useState, useEffect } from 'react';
import './App.css';



function StockDetail({ match }) {
  useEffect(() => {
    fetchItem();
  },[]
  );
    const [item, setItem] = useState([]);
    const fetchItem = async () => {
    const data = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/${match.params.ticker}`
    );
    const item = await data.json();
    setItem(item.historical.reverse());
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
        <td>{item.date}</td>
        <td>{item.open}</td>
        <td>{item.high}</td>
        <td>{item.low}</td>
        <td>{item.close}</td>
        </tr>
     ))}
     </tbody>
     </table>
    </div>
  );
}

export default StockDetail;